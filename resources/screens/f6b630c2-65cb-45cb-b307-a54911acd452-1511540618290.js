jQuery("#simulation")
  .on("click", ".s-f6b630c2-65cb-45cb-b307-a54911acd452 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_back")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/11c80aa9-affe-48f4-b0e1-c78f122e5f32"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_5",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_5",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_6",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_6",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0c1e600c-38ce-4369-a706-4cc131893544"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-f6b630c2-65cb-45cb-b307-a54911acd452 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_9": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_9": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-f6b630c2-65cb-45cb-b307-a54911acd452 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 - 1 - 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 - 1 - 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 - 1 - 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 - 1 - 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_9": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 - 1 - 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f6b630c2-65cb-45cb-b307-a54911acd452 #s-Rectangle_9": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 - 1 - 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });