ace.define("ace/snippets/json",["require","exports","module"],function(e,t,n){"use strict";t.snippetText='# Steps\n\
snippet steps\n\
	"steps": [\n\
		{\n\
			$0\n\
		}\n\
	]\n\
# On Success\n\
snippet onSuccess\n\
	"onSuccess": [\n\
		{\n\
			$0\n\
		}\n\
	]\n\
# On Failure\n\
snippet onFailure\n\
	"onFailure": [\n\
		{\n\
			$0\n\
		}\n\
	]\n\
# Grok\n\
snippet grok\n\
	"grok": {\n\
		"config": {\n\
			"field": "${1:message}",\n\
			${2:"overwrite": ["message"],}\n\
			"patterns": [\n\
				"$3"\n\
			]\n\
		}$0\n\
	}\n\
# GeoIP\n\
snippet geoIp\n\
	"geoIp": {\n\
		"config": {\n\
			"sourceField": "${1:ip}",\n\
			"targetField": "${2:geoip}",\n\
			"tagsOnSuccess": ["geo-ip"]\n\
		}$0\n\
	}\n\
# Add Field\n\
snippet addField\n\
	"addField": {\n\
		"config": {\n\
			"path": "$1",\n\
			"value": "{{$2}}"\n\
		}$0\n\
	}\n\
# Add Tag\n\
snippet addTag\n\
	"addTag": {\n\
		"config": {\n\
			"tags": ["$1"]\n\
		}$0\n\
	}\n\
# Date\n\
snippet date\n\
	"date": {\n\
		"config": {\n\
			"field": "${1:timestamp}",\n\
			"targetField": "${2:@timestamp}",\n\
			${3:"timeZone": "UTC",}\n\
			"formats": [\n\
				"${4:yyyy-MM-dd HH:mm:ss.SSS}"\n\
			]\n\
		}$0\n\
	}\n\
# Drop\n\
snippet drop\n\
	"drop": {\n\
		"config": {\n\
			"percentage": "${1:100}"\n\
		}$0\n\
	}\n\
# JSON\n\
snippet json\n\
	"json": {\n\
		"config": {\n\
			"field": "${1:_json}",\n\
			${2:"targetField": ""}\n\
		}$0\n\
	}\n\
# Key Value\n\
snippet kv\n\
	"kv": {\n\
		"config": {\n\
			"field": "${1:_kv}",\n\
			"targetField": "$2",\n\
			${3:"includeKeys": [""],}\n\
			${4:"excludeKeys": [""],}\n\
			${5:"trim": "",}\n\
			${6:"trimKey": "$6",}\n\
			"valueSplit": "${7:=}",\n\
			"fieldSplit": "${8: }"\n\
		}$0\n\
	}\n\
# Remove Field\n\
snippet removeField\n\
	"removeField": {\n\
		"config": {\n\
			"fields": ["$1"]\n\
		}$0\n\
	}\n\
# Remove Tag\n\
snippet removeTag\n\
	"removeTag": {\n\
		"config": {\n\
			"tags": ["${1:_grokparsefailure}"]\n\
		}\n\
	}\n\
# Rename Field\n\
snippet rename\n\
	"rename": {\n\
		"config":{\n\
			"from": "$1",\n\
			"to": "$2"\n\
		}$0\n\
	}\n\
# Substitute\n\
snippet gsub\n\
	"gsub": {\n\
		"config": {\n\
			"field": "$1",\n\
			"pattern": "$2",\n\
			"replacement": "$3"\n\
		}$0\n\
	}\n\
# User Agent\n\
snippet userAgent\n\
	"userAgent": {\n\
		"config": {\n\
			"field": "${1:User_Agent}",\n\
			"prefix": "${2:UA-}"\n\
		}$0\n\
	}\n\
# Convert\n\
snippet convert\n\
	"convert": {\n\
		"config": {\n\
			"path": "$1",\n\
			"type": "$2"\n\
		}$0\n\
	}\n\
# CSV\n\
snippet csv\n\
	"csv": {\n\
		"config": {\n\
			"field": "${1:_csv}",\n\
			"targetField": "$2",\n\
			"seperator": "${3:,}",\n\
			"quoteChar": "$4",\n\
			"columns": ["$5"]\n\
		}$0\n\
	}\n\
# Translate\n\
snippet translate\n\
	"translate": {\n\
		"config": {\n\
			"field": "$1",\n\
			"targetField": "$2",\n\
			${3:"fallback": "",}\n\
			"dictionary": {\n\
				${4:"200": "OK",\n\
				"404": "Not Found"}\n\
			}\n\
		}$0\n\
	}\n\
# Math\n\
snippet math\n\
	"math": {\n\
		"config": {\n\
			"targetField": "$1",\n\
			"expression": "$2"\n\
		}$0\n\
	}\n\
# If\n\
snippet if\n\
	"if": {\n\
		"condition": {\n\
			$1\n\
		},\n\
		"then" : [\n\
			{\n\
				$2\n\
			}\n\
		],\n\
		"else": [\n\
			{\n\
				$3\n\
			}\n\
		]\n\
	}$0\n\
# And\n\
snippet and\n\
	"and": [\n\
		{\n\
			$1\n\
		},\n\
		{\n\
			$2\n\
		}\n\
	]$0\n\
# Or\n\
snippet or\n\
	"or": [\n\
		{\n\
			$1\n\
		},\n\
		{\n\
			$2\n\
		}\n\
	]$0\n\
# Not\n\
snippet not\n\
	"not": [\n\
		{\n\
			$1\n\
		},\n\
		{\n\
			$2\n\
		}\n\
	]$0\n\
# In\n\
snippet in\n\
	"in": {\n\
		"path": "$1",\n\
		"value": "$2"\n\
	}$0\n\
# Has Value\n\
snippet hasValue\n\
	"hasValue": {\n\
		"field": "$1",\n\
		"possibleValues": ["$2"]\n\
	}$0\n\
# Match Regex\n\
snippet matchRegex\n\
	"matchRegex": {\n\
		"field": "$1",\n\
		"regex": "$2",\n\
		"caseInsensitive": "${3:false}",\n\
		"matchPartOfValue": "${4:true}"\n\
	}$0\n\
# Exists\n\
snippet exists\n\
	"exists": {\n\
		"field": "$1"\n\
	}$0\n\
# Field Type\n\
snippet fieldType\n\
	"fieldType": {\n\
		"path": "$1",\n\
		"type": "$2"\n\
	}$0\n\
# Math Compare\n\
snippet mathComparator\n\
	"mathComparator": {\n\
		"field": "$1",\n\
		"gt": "$2",\n\
		"gte": "$3",\n\
		"lt": "$4",\n\
		"lte": "$5"\n\
	}$0\n\
# Append List\n\
snippet appendList\n\
	"appendList": {\n\
		"config": {\n\
			"path": "$1",\n\
			"values": [{{$2}}]\n\
		}$0\n\
	}\n\
# Split\n\
snippet split\n\
	"split": {\n\
		"config": {\n\
			"field": "$1",\n\
			"seperator": "${2:,}"\n\
		}\n\
	}\n\
# Lower Case\n\
snippet lowerCase\n\
	"lowerCase": {\n\
		"config": {\n\
			"field": "$1"\n\
		}$0\n\
	}\n\
# Upper Case\n\
snippet upperCase\n\
	"upperCase": {\n\
		"config": {\n\
			"field": "$1"\n\
		}$0\n\
	}\n\
# Strip\n\
snippet strip\n\
	"strip": {\n\
		"config": {\n\
			"fields": ["$1"]\n\
		}$0\n\
	}\n\
# Anonymize\n\
snippet anonymize\n\
	"anonymyze": {\n\
		"config": {\n\
			"fields": ["$1"],\n\
			"alogorithm": "${2:SHA256}",\n\
			"key": "$3"	\n\
		}$0\n\
	}\n\
# AhoCorasick\n\
snippet AhoCorasik\n\
	"ahoCorasick": {  \n\
		"config": {  \n\
			"field": "$1"\n\
			"targetField": "$2"\n\
			"inputWords": ["$3"]\n\
		}$0\n\
	}\n\
# XML\n\
snippet xml\n\
	"xml": {\n\
		"config": {\n\
			"field": "$1",\n\
			"targetField": "$2",\n\
			"store_xml": "${3:true}",\n\
			"xpath": {\n\
				"${4:key}": "${5:value}"\n\
			}\n\
		}$0\n\
	}',t.scope="json"});                (function() {
                    ace.require(["ace/snippets/json"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            