'use strict';

/* Services */

var cookServices = angular.module('cookServices', ['ngResource']);

function getRevise(original) {
	for(var i=0; i < cookReviseSchema.length; i++) {
		var schema = cookReviseSchema[i];
		if(typeof(activeReviseSchema) != 'undefined' && (schema.schema == activeReviseSchema)) {
			var item = schema.revise[original];
			return item ? item : original;
		}
	}
	return original;
}

cookServices.factory('HubSwitch', ['$resource', '$window',
	function($resource, $window) {
		var factory = {};
		var allPages = [];
		var k = 0;
		for(var i=0; i < cookPages.length; i++) {
			var section = cookPages[i];
			for(var j=0; j < section.pages.length; j++) {
				var page = section.pages[j];
				page.entry = getRevise(section.entry);
				page.path = section.path;
				page.partial = getRevise(page.id);
				allPages[k] = page;
				k++;
			}
		}

		factory.getAllPages = function() {
			return allPages;
		};
		factory.getPage = function(pageId) {
			for(var i = 0; i < allPages.length; i++) {
				if(allPages[i].id == pageId) {
					return allPages[i];
				}
			}
			return {'id': 'null', 'title': 'null', 'timeout': -1};
		};

		var actionResource = $resource('/custom/flow2');
		var actionFlow = 'default';
		var actionPage = $window.pageId;
		var actionResult;
		var actionStart = false;

		factory.setFlow = function(flowId) {
			actionFlow = flowId;
		};
		factory.setPage = function(pageId) {
			actionPage = pageId;
		};
		factory.setActionStart = function(start) {
			actionStart = start;
		};
		factory.action = function(actionId, callback) {
			if (actionStart) return;
			actionStart = true; 
			var request = {
					'actionId': actionId,
					'page': actionPage,
					'flow': actionFlow
			};
			actionResult = actionResource.get(request, function() {
				callback(actionResult);
			});
		};
		factory.submit = function(actionId, data, callback) {
			if (actionStart) return;
			actionStart = true; 
			var request = {
					'actionId': actionId,
					'page': actionPage,
					'flow': actionFlow,
					'pool': data
			};
			actionResult = actionResource.get(request, function() {
				callback(actionResult);
			});
		};
		factory.getResult = function() {
			return actionResult;
		};
		var poolResource = $resource('/custom/pool', {}, {
            query: {method: 'GET'},
            save: {method: 'POST'}
        });
		factory.getPool = function() {
            return poolResource;
        }
		return factory;
	}]);
