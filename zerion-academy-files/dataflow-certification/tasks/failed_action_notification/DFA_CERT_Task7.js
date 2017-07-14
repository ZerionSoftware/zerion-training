var dataflow = {
    "name": "",
    "description": "",
    "owningEntity": "",
    "trustedEntities": [],
    "CREATED_DATE": "2017-07-10T12:41:32.146Z",
    "CREATED_BY": "587e792beb415c798904dc22",
    "MODIFIED_BY_NAME": "",
    "recordSetKeyHashes": [],
    "nodes": [{
        "name": "rs1",
        "type": "recordset",
        "recordCount": 0,
        "node": 0,
        "nodeType": "node",
        "recordSetName": "rs1",
        "description": null
    }, {
        "name": "wh_rs1",
        "type": "webhook",
        "recordCount": 0,
        "node": 1,
        "nodeType": "input",
        "secure": false,
        "recordSetIndex": 0,
        "webhookName": "wh_rs1",
        "webhookUrl": ""
    }, {
        "name": "parent_data",
        "type": "recordset",
        "recordCount": 0,
        "node": 2,
        "nodeType": "node",
        "recordSetName": "parent_data",
        "description": null,
        "data_refinery": {
            "parameters": {
                "previewInputData": "{\n  \"id\": 2,\n  \"parent_record_id\": 0,\n  \"parent_page_id\": 0,\n  \"parent_element_id\": 0,\n  \"created_date\": \"2017-07-01T15:42:50+00:00\",\n  \"created_by\": \"jhsu_qatest\",\n  \"created_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n  \"created_device_id\": \"357903062464155\",\n  \"modified_date\": \"2017-07-10T08:43:14+00:00\",\n  \"modified_by\": \"jhsu_qatest\",\n  \"modified_location\": \"Server\",\n  \"modified_device_id\": \"Server\",\n  \"server_modified_date\": \"2017-07-10T08:43:14+00:00\",\n  \"insured_name\": \"Jonathan Hsu\",\n  \"insurance_provider\": \"Aetna\",\n  \"property_address\": \"123 Main Street\",\n  \"property_city\": \"Herndon\",\n  \"property_state\": \"VA\",\n  \"property_zip\": \"22032\",\n  \"requested_date_of_inspection\": null,\n  \"confirm_gps_location\": \"Latitude:38.957350,\\r\\nLongitude:-77.414456,\\r\\nAltitude:74.900002,\\r\\nSpeed:0.000000,\\r\\nAccuracy:20.344000,\\r\\nProvider:network,\\r\\nTime:07/01/2017 03:39:15 EDT\",\n  \"elevation\": null,\n  \"distance_from_coast\": null,\n  \"inspection_type\": \"full\",\n  \"notes_from_homeowner\": \"Beware of dog\",\n  \"property_photo\": \"https://dl.dropbox.com/s/ldaqrpou9wtm3lt/field_10391746515957fc34e5278.jpg?dl=0\",\n  \"roof_details\": [\n    {\n      \"id\": 3,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6850,\n      \"created_date\": \"2017-07-01T15:44:37+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:44:38+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:09+00:00\",\n      \"roof_features\": \"Gutters,Chimney,Skylights\",\n      \"type_of_roof_covoring\": \"none\",\n      \"roof_drainage_system\": \"yes\",\n      \"any_visible_damage_\": \"no\",\n      \"explain_visible_damage\": null,\n      \"roof_photo_1\": \"https://dl.dropbox.com/s/2g6nd2iduw2dwce/field_16756218655957fc3d78fb0.png?dl=0\",\n      \"roof_photo_2\": null,\n      \"roof_photo_3\": null,\n      \"additional_roof_comments\": null\n    }\n  ],\n  \"window_details\": [\n    {\n      \"id\": 1,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6853,\n      \"created_date\": \"2017-07-01T15:45:12+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957339:-77.414445:74.900002:20.643000:20.643000:0.000000:0.000000:1498938212352.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:45:13+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957339:-77.414445:74.900002:20.643000:20.643000:0.000000:0.000000:1498938212352.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:14+00:00\",\n      \"number_of_windows_on_property__estimate_\": 10,\n      \"locks_functional_on_all_windows_\": \"yes\",\n      \"cracks_on_any_windows_\": \"no\",\n      \"air_drafts_on_any_windows\": \"yes\",\n      \"window_photo_1\": \"https://dl.dropbox.com/s/3h1boaj30njoxbb/field_5660990045957fc42f1481.png?dl=0\",\n      \"window_photo_2\": null,\n      \"window_photo_3\": null,\n      \"additional_comments\": null\n    }\n  ],\n  \"plumbing_details\": [\n    {\n      \"id\": 2,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6856,\n      \"created_date\": \"2017-07-01T15:45:30+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957350:-77.414456:74.900002:20.475000:20.475000:0.000000:0.000000:1498938343424.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:45:30+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957350:-77.414456:74.900002:20.475000:20.475000:0.000000:0.000000:1498938343424.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:17+00:00\",\n      \"number_of_sinks_on_property\": 4,\n      \"number_of_showers_bathtubs_on_the_property\": 2,\n      \"number_of_toilets_on_the_property\": 3,\n      \"all_plumbing_appliances_functional_\": \"yes\",\n      \"any_leaks_on_the_property_\": \"no\",\n      \"plumbing_photo_1\": null,\n      \"plumbing_photo_2\": null,\n      \"plumbing_photo_3\": null,\n      \"additional_comments\": null\n    }\n  ],\n  \"additional_property_photos\": \"0\",\n  \"additional_notes\": null,\n  \"property_summary\": \"Very little damage\",\n  \"overall_property_condition\": \"Good\",\n  \"insp_sig\": \"https://dl.dropbox.com/s/cf4e5zhemjf7wmt/field_17782047115957fc377ee1c.png?dl=0\",\n  \"total_cost\": \"$300\",\n  \"inspector_email_\": \"jhsu@zerionsoftware.com\",\n  \"_id\": \"596376633c37ad8f8ea34291\"\n}",
                "filterHelperCode": "",
                "filterExpression": "",
                "transformationHelperCode": "delete record.roof_details;\ndelete record.window_details;\ndelete record.plumbing_details;",
                "transformationExpression": "record"
            },
            "type": "PREPROCESSING",
            "deleteOnEachRun": true,
            "status": 1
        },
        "parentRecordSetIndex": [0]
    }, {
        "name": "subform_roof_details",
        "type": "recordset",
        "recordCount": 0,
        "node": 3,
        "nodeType": "node",
        "recordSetName": "subform_roof_details",
        "description": null,
        "data_refinery": {
            "parameters": {
                "previewInputData": "{\n  \"id\": 2,\n  \"parent_record_id\": 0,\n  \"parent_page_id\": 0,\n  \"parent_element_id\": 0,\n  \"created_date\": \"2017-07-01T15:42:50+00:00\",\n  \"created_by\": \"jhsu_qatest\",\n  \"created_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n  \"created_device_id\": \"357903062464155\",\n  \"modified_date\": \"2017-07-10T08:43:14+00:00\",\n  \"modified_by\": \"jhsu_qatest\",\n  \"modified_location\": \"Server\",\n  \"modified_device_id\": \"Server\",\n  \"server_modified_date\": \"2017-07-10T08:43:14+00:00\",\n  \"insured_name\": \"Jonathan Hsu\",\n  \"insurance_provider\": \"Aetna\",\n  \"property_address\": \"123 Main Street\",\n  \"property_city\": \"Herndon\",\n  \"property_state\": \"VA\",\n  \"property_zip\": \"22032\",\n  \"requested_date_of_inspection\": null,\n  \"confirm_gps_location\": \"Latitude:38.957350,\\r\\nLongitude:-77.414456,\\r\\nAltitude:74.900002,\\r\\nSpeed:0.000000,\\r\\nAccuracy:20.344000,\\r\\nProvider:network,\\r\\nTime:07/01/2017 03:39:15 EDT\",\n  \"elevation\": null,\n  \"distance_from_coast\": null,\n  \"inspection_type\": \"full\",\n  \"notes_from_homeowner\": \"Beware of dog\",\n  \"property_photo\": \"https://dl.dropbox.com/s/ldaqrpou9wtm3lt/field_10391746515957fc34e5278.jpg?dl=0\",\n  \"roof_details\": [\n    {\n      \"id\": 3,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6850,\n      \"created_date\": \"2017-07-01T15:44:37+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:44:38+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:09+00:00\",\n      \"roof_features\": \"Gutters,Chimney,Skylights\",\n      \"type_of_roof_covoring\": \"none\",\n      \"roof_drainage_system\": \"yes\",\n      \"any_visible_damage_\": \"no\",\n      \"explain_visible_damage\": null,\n      \"roof_photo_1\": \"https://dl.dropbox.com/s/2g6nd2iduw2dwce/field_16756218655957fc3d78fb0.png?dl=0\",\n      \"roof_photo_2\": null,\n      \"roof_photo_3\": null,\n      \"additional_roof_comments\": null\n    }\n  ],\n  \"window_details\": [\n    {\n      \"id\": 1,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6853,\n      \"created_date\": \"2017-07-01T15:45:12+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957339:-77.414445:74.900002:20.643000:20.643000:0.000000:0.000000:1498938212352.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:45:13+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957339:-77.414445:74.900002:20.643000:20.643000:0.000000:0.000000:1498938212352.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:14+00:00\",\n      \"number_of_windows_on_property__estimate_\": 10,\n      \"locks_functional_on_all_windows_\": \"yes\",\n      \"cracks_on_any_windows_\": \"no\",\n      \"air_drafts_on_any_windows\": \"yes\",\n      \"window_photo_1\": \"https://dl.dropbox.com/s/3h1boaj30njoxbb/field_5660990045957fc42f1481.png?dl=0\",\n      \"window_photo_2\": null,\n      \"window_photo_3\": null,\n      \"additional_comments\": null\n    }\n  ],\n  \"plumbing_details\": [\n    {\n      \"id\": 2,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6856,\n      \"created_date\": \"2017-07-01T15:45:30+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957350:-77.414456:74.900002:20.475000:20.475000:0.000000:0.000000:1498938343424.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:45:30+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957350:-77.414456:74.900002:20.475000:20.475000:0.000000:0.000000:1498938343424.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:17+00:00\",\n      \"number_of_sinks_on_property\": 4,\n      \"number_of_showers_bathtubs_on_the_property\": 2,\n      \"number_of_toilets_on_the_property\": 3,\n      \"all_plumbing_appliances_functional_\": \"yes\",\n      \"any_leaks_on_the_property_\": \"no\",\n      \"plumbing_photo_1\": null,\n      \"plumbing_photo_2\": null,\n      \"plumbing_photo_3\": null,\n      \"additional_comments\": null\n    }\n  ],\n  \"additional_property_photos\": \"0\",\n  \"additional_notes\": null,\n  \"property_summary\": \"Very little damage\",\n  \"overall_property_condition\": \"Good\",\n  \"insp_sig\": \"https://dl.dropbox.com/s/cf4e5zhemjf7wmt/field_17782047115957fc377ee1c.png?dl=0\",\n  \"total_cost\": \"$300\",\n  \"inspector_email_\": \"jhsu@zerionsoftware.com\",\n  \"_id\": \"596376633c37ad8f8ea34291\"\n}",
                "filterHelperCode": "",
                "filterExpression": "",
                "transformationHelperCode": "",
                "transformationExpression": "record.roof_details"
            },
            "type": "PREPROCESSING",
            "deleteOnEachRun": true,
            "status": 1
        },
        "parentRecordSetIndex": [0]
    }, {
        "name": "subform_window_details",
        "type": "recordset",
        "recordCount": 0,
        "node": 4,
        "nodeType": "node",
        "recordSetName": "subform_window_details",
        "description": null,
        "data_refinery": {
            "parameters": {
                "previewInputData": "",
                "filterHelperCode": "",
                "filterExpression": "",
                "transformationHelperCode": "",
                "transformationExpression": "record.window_details"
            },
            "type": "PREPROCESSING",
            "deleteOnEachRun": true,
            "status": 1
        },
        "parentRecordSetIndex": [0]
    }, {
        "name": "subform_plumbing_details",
        "type": "recordset",
        "recordCount": 0,
        "node": 5,
        "nodeType": "node",
        "recordSetName": "subform_plumbing_details",
        "description": null,
        "data_refinery": {
            "parameters": {
                "previewInputData": "{\n  \"id\": 2,\n  \"parent_record_id\": 0,\n  \"parent_page_id\": 0,\n  \"parent_element_id\": 0,\n  \"created_date\": \"2017-07-01T15:42:50+00:00\",\n  \"created_by\": \"jhsu_qatest\",\n  \"created_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n  \"created_device_id\": \"357903062464155\",\n  \"modified_date\": \"2017-07-10T08:43:14+00:00\",\n  \"modified_by\": \"jhsu_qatest\",\n  \"modified_location\": \"Server\",\n  \"modified_device_id\": \"Server\",\n  \"server_modified_date\": \"2017-07-10T08:43:14+00:00\",\n  \"insured_name\": \"Jonathan Hsu\",\n  \"insurance_provider\": \"Aetna\",\n  \"property_address\": \"123 Main Street\",\n  \"property_city\": \"Herndon\",\n  \"property_state\": \"VA\",\n  \"property_zip\": \"22032\",\n  \"requested_date_of_inspection\": null,\n  \"confirm_gps_location\": \"Latitude:38.957350,\\r\\nLongitude:-77.414456,\\r\\nAltitude:74.900002,\\r\\nSpeed:0.000000,\\r\\nAccuracy:20.344000,\\r\\nProvider:network,\\r\\nTime:07/01/2017 03:39:15 EDT\",\n  \"elevation\": null,\n  \"distance_from_coast\": null,\n  \"inspection_type\": \"full\",\n  \"notes_from_homeowner\": \"Beware of dog\",\n  \"property_photo\": \"https://dl.dropbox.com/s/ldaqrpou9wtm3lt/field_10391746515957fc34e5278.jpg?dl=0\",\n  \"roof_details\": [\n    {\n      \"id\": 3,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6850,\n      \"created_date\": \"2017-07-01T15:44:37+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:44:38+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957350:-77.414456:74.900002:20.584999:20.584999:0.000000:0.000000:1498938081280.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:09+00:00\",\n      \"roof_features\": \"Gutters,Chimney,Skylights\",\n      \"type_of_roof_covoring\": \"none\",\n      \"roof_drainage_system\": \"yes\",\n      \"any_visible_damage_\": \"no\",\n      \"explain_visible_damage\": null,\n      \"roof_photo_1\": \"https://dl.dropbox.com/s/2g6nd2iduw2dwce/field_16756218655957fc3d78fb0.png?dl=0\",\n      \"roof_photo_2\": null,\n      \"roof_photo_3\": null,\n      \"additional_roof_comments\": null\n    }\n  ],\n  \"window_details\": [\n    {\n      \"id\": 1,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6853,\n      \"created_date\": \"2017-07-01T15:45:12+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957339:-77.414445:74.900002:20.643000:20.643000:0.000000:0.000000:1498938212352.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:45:13+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957339:-77.414445:74.900002:20.643000:20.643000:0.000000:0.000000:1498938212352.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:14+00:00\",\n      \"number_of_windows_on_property__estimate_\": 10,\n      \"locks_functional_on_all_windows_\": \"yes\",\n      \"cracks_on_any_windows_\": \"no\",\n      \"air_drafts_on_any_windows\": \"yes\",\n      \"window_photo_1\": \"https://dl.dropbox.com/s/3h1boaj30njoxbb/field_5660990045957fc42f1481.png?dl=0\",\n      \"window_photo_2\": null,\n      \"window_photo_3\": null,\n      \"additional_comments\": null\n    }\n  ],\n  \"plumbing_details\": [\n    {\n      \"id\": 2,\n      \"parent_record_id\": 2,\n      \"parent_page_id\": 612,\n      \"parent_element_id\": 6856,\n      \"created_date\": \"2017-07-01T15:45:30+00:00\",\n      \"created_by\": \"jhsu_qatest\",\n      \"created_location\": \"38.957350:-77.414456:74.900002:20.475000:20.475000:0.000000:0.000000:1498938343424.000000\",\n      \"created_device_id\": \"357903062464155\",\n      \"modified_date\": \"2017-07-01T15:45:30+00:00\",\n      \"modified_by\": \"jhsu_qatest\",\n      \"modified_location\": \"38.957350:-77.414456:74.900002:20.475000:20.475000:0.000000:0.000000:1498938343424.000000\",\n      \"modified_device_id\": \"357903062464155\",\n      \"server_modified_date\": \"2017-07-01T15:47:17+00:00\",\n      \"number_of_sinks_on_property\": 4,\n      \"number_of_showers_bathtubs_on_the_property\": 2,\n      \"number_of_toilets_on_the_property\": 3,\n      \"all_plumbing_appliances_functional_\": \"yes\",\n      \"any_leaks_on_the_property_\": \"no\",\n      \"plumbing_photo_1\": null,\n      \"plumbing_photo_2\": null,\n      \"plumbing_photo_3\": null,\n      \"additional_comments\": null\n    }\n  ],\n  \"additional_property_photos\": \"0\",\n  \"additional_notes\": null,\n  \"property_summary\": \"Very little damage\",\n  \"overall_property_condition\": \"Good\",\n  \"insp_sig\": \"https://dl.dropbox.com/s/cf4e5zhemjf7wmt/field_17782047115957fc377ee1c.png?dl=0\",\n  \"total_cost\": \"$300\",\n  \"inspector_email_\": \"jhsu@zerionsoftware.com\",\n  \"_id\": \"596376633c37ad8f8ea34291\"\n}",
                "filterHelperCode": "",
                "filterExpression": "",
                "transformationHelperCode": "",
                "transformationExpression": "record.plumbing_details"
            },
            "type": "PREPROCESSING",
            "deleteOnEachRun": true,
            "status": 1
        },
        "parentRecordSetIndex": [0]
    }, {
        "name": "send_parent_data",
        "type": "http_post",
        "recordCount": 0,
        "node": 6,
        "nodeType": "output",
        "recordSetIndex": 2,
        "postAction": {
            "actionType": "http_post",
            "actionName": "send_parent_data",
            "version": "2.1",
            "conditions": [{
                "conditionHelperCode": "",
                "conditionExpression": "",
                "action": {
                    "dataflowName": "dfa_cert_failed_action_event",
                    "dataflowId": "596375fc7d6f3dfd13ccdc16",
                    "recordsetName": "parent_data",
                    "recordsetId": "596376737d6f3dfd13ccdc19",
                    "entityId": "587e792beb415c798904dc22",
                    "entityName": "jhsu_qatest",
                    "postUrl": "none",
                    "postFormat": "JSON",
                    "contentType": "raw",
                    "rawType": "application/json",
                    "rawBody": "{{json record}}",
                    "postHeader": [{
                        "name": "Content-Type",
                        "mapping": "application/json"
                    }, {
                        "name": "Content-Type",
                        "mapping": "application/json"
                    }],
                    "postBody": []
                }
            }],
            "type": "POST_ACTION",
            "status": 1,
            "eventSuccessTitle": null,
            "eventSuccess": null,
            "eventFailureTitle": null,
            "eventFailure": null
        }
    }, {
        "name": "send_window_details",
        "type": "http_post",
        "recordCount": 0,
        "node": 7,
        "nodeType": "output",
        "recordSetIndex": 3,
        "postAction": {
            "actionType": "http_post",
            "actionName": "send_window_details",
            "version": "2.1",
            "conditions": [{
                "conditionHelperCode": "",
                "conditionExpression": "",
                "action": {
                    "dataflowName": "dfa_cert_failed_action_event",
                    "dataflowId": "596375fc7d6f3dfd13ccdc16",
                    "recordsetName": "subform_roof_details",
                    "recordsetId": "596376b27d6f3dfd13ccdc1c",
                    "entityId": "587e792beb415c798904dc22",
                    "entityName": "jhsu_qatest",
                    "postUrl": "none",
                    "postFormat": "JSON",
                    "contentType": "raw",
                    "rawType": "application/json",
                    "rawBody": "{{json record}}",
                    "postHeader": [{
                        "name": "Content-Type",
                        "mapping": "application/json"
                    }, {
                        "name": "Content-Type",
                        "mapping": "application/json"
                    }],
                    "postBody": []
                }
            }],
            "type": "POST_ACTION",
            "status": 1,
            "eventSuccessTitle": null,
            "eventSuccess": null,
            "eventFailureTitle": null,
            "eventFailure": null
        }
    }, {
        "name": "send_window_detail",
        "type": "http_post",
        "recordCount": 0,
        "node": 8,
        "nodeType": "output",
        "recordSetIndex": 4,
        "postAction": {
            "actionType": "http_post",
            "actionName": "send_window_detail",
            "version": "2.1",
            "conditions": [{
                "conditionHelperCode": "",
                "conditionExpression": "",
                "action": {
                    "dataflowName": "dfa_cert_failed_action_event",
                    "dataflowId": "596375fc7d6f3dfd13ccdc16",
                    "recordsetName": "subform_window_details",
                    "recordsetId": "596376bb7d6f3dfd13ccdc1e",
                    "entityId": "587e792beb415c798904dc22",
                    "entityName": "jhsu_qatest",
                    "postUrl": "none",
                    "postFormat": "JSON",
                    "contentType": "raw",
                    "rawType": "application/json",
                    "rawBody": "{{json record}}",
                    "postHeader": [{
                        "name": "Content-Type",
                        "mapping": "application/json"
                    }, {
                        "name": "Content-Type",
                        "mapping": "application/json"
                    }],
                    "postBody": []
                }
            }],
            "type": "POST_ACTION",
            "status": 1,
            "eventSuccessTitle": null,
            "eventSuccess": null,
            "eventFailureTitle": null,
            "eventFailure": null
        }
    }, {
        "name": "send_plumbing_details",
        "type": "http_post",
        "recordCount": 0,
        "node": 9,
        "nodeType": "output",
        "recordSetIndex": 5,
        "postAction": {
            "actionType": "http_post",
            "actionName": "send_plumbing_details",
            "version": "2.1",
            "conditions": [{
                "conditionHelperCode": "",
                "conditionExpression": "",
                "action": {
                    "dataflowName": "dfa_cert_failed_action_event",
                    "dataflowId": "596375fc7d6f3dfd13ccdc16",
                    "recordsetName": "subform_plumbing_details",
                    "recordsetId": "596376c57d6f3dfd13ccdc20",
                    "entityId": "587e792beb415c798904dc22",
                    "entityName": "jhsu_qatest",
                    "postUrl": "none",
                    "postFormat": "JSON",
                    "contentType": "raw",
                    "rawType": "application/json",
                    "rawBody": "{{json record}}",
                    "postHeader": [{
                        "name": "Content-Type",
                        "mapping": "application/json"
                    }],
                    "postBody": []
                }
            }],
            "type": "POST_ACTION",
            "status": 1,
            "eventSuccessTitle": null,
            "eventSuccess": null,
            "eventFailureTitle": null,
            "eventFailure": null
        }
    }],
    "links": [{
        "source": 1,
        "target": 0,
        "value": 0
    }, {
        "source": 0,
        "target": 2,
        "value": 0
    }, {
        "source": 0,
        "target": 3,
        "value": 0
    }, {
        "source": 0,
        "target": 4,
        "value": 0
    }, {
        "source": 0,
        "target": 5,
        "value": 0
    }, {
        "source": 2,
        "target": 6,
        "value": 0
    }, {
        "source": 3,
        "target": 7,
        "value": 0
    }, {
        "source": 4,
        "target": 8,
        "value": 0
    }, {
        "source": 5,
        "target": 9,
        "value": 0
    }],
    "requestAccess": [],
    "version": "2.0",
    "autocleaniFormData": true,
    "maxObjectsPerDataflow": 20,
    "status": null
};
