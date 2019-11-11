define(["require","exports","tslib","external/lodash","modules/clean/logging/telemetry","modules/clean/logging/hive/schemas/web-ecosystem_integration_events"],function(e,t,n,o,i,r){"use strict";function a(e){var t=o.filter(e,function(e){return"slack_link_share"===e.type}),a=o.countBy(t,"slack_conversation_type"),s=o.filter(e,function(e){return"zoom_screen_share"===e.type}),c=o.countBy(s,"zoom_screen_share_type"),l=n.__assign({slack_activity_count:t.length,zoom_activity_count:s.length},a,c),_=o.mapValues(l,function(e){return e.toString()});(new i.HiveLogger).log(new r.EcosystemIntegrationLoggingTableRow({event_name:r.EventName.activityTabClicked,extra:_}))}Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importStar(o),i=n.__importStar(i),t.thirdPartyHiveLogger=a});
//# sourceMappingURL=thirdparty_activity_logger.min.js-vflP-suPg.map