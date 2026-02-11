/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['control_forever'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_forever",
      "message0": Blockly.Msg.CONTROL_FOREVER,
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_repeat'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_repeat",
      "message0": Blockly.Msg.CONTROL_REPEAT,
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_if'] = {
  /**
   * Block for if-then.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_if",
      "message0": Blockly.Msg.CONTROL_IF,
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_as_object'] = {
  /**
   * Block
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_as_object",
      "message0": Blockly.Msg.CONTROL_ASOBJECT,
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "OBJMENU"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_as_object_menu'] = {
  /**
   * menu
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECT",
          "options": [
            [Blockly.Msg.CONTROL_ASOBJECT_CLONES, '_clones_'],
            [Blockly.Msg.CONTROL_ASOBJECT_ORIGINAL, '_original_']
          ]
        }
      ],
      "extensions": ["colours_control", "output_string"]
    });
  }
};

Blockly.Blocks['control_unless'] = {
  /**
   * Block for reverse if-then.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_unless",
      "message0": Blockly.Msg.CONTROL_UNLESS,
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_if_else'] = {
  /**
   * Block for if-else.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_if_else",
      "message0": Blockly.Msg.CONTROL_IF,
      "message1": "%1",
      "message2": Blockly.Msg.CONTROL_ELSE,
      "message3": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_unless_else'] = {
  /**
   * Block for reverse if-else.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_unless_else",
      "message0": Blockly.Msg.CONTROL_UNLESS,
      "message1": "%1",
      "message2": Blockly.Msg.CONTROL_ELSE,
      "message3": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};


Blockly.Blocks['control_stop'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    var ALL_SCRIPTS = 'all';
    var THIS_SCRIPT = 'this script';
    var OTHER_SCRIPTS = 'other scripts in sprite';
    var stopDropdown = new Blockly.FieldDropdown(function() {
      if (this.sourceBlock_ &&
          this.sourceBlock_.nextConnection &&
          this.sourceBlock_.nextConnection.isConnected()) {
        return [
          [Blockly.Msg.CONTROL_STOP_OTHER, OTHER_SCRIPTS]
        ];
      }
      return [[Blockly.Msg.CONTROL_STOP_ALL, ALL_SCRIPTS],
        [Blockly.Msg.CONTROL_STOP_THIS, THIS_SCRIPT],
        [Blockly.Msg.CONTROL_STOP_OTHER, OTHER_SCRIPTS]
      ];
    }, function(option) {
      // Create an event group to keep field value and mutator in sync
      // Return null at the end because setValue is called here already.
      Blockly.Events.setGroup(true);
      var oldMutation = Blockly.Xml.domToText(this.sourceBlock_.mutationToDom());
      this.sourceBlock_.setNextStatement(option == OTHER_SCRIPTS);
      var newMutation = Blockly.Xml.domToText(this.sourceBlock_.mutationToDom());
      Blockly.Events.fire(new Blockly.Events.BlockChange(this.sourceBlock_,
          'mutation', null, oldMutation, newMutation));
      this.setValue(option);
      Blockly.Events.setGroup(false);
      return null;
    });
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROL_STOP)
        .appendField(stopDropdown, 'STOP_OPTION');
    this.setCategory(Blockly.Categories.control);
    this.setColour(Blockly.Colours.control.primary,
        Blockly.Colours.control.secondary,
        Blockly.Colours.control.tertiary,
        Blockly.Colours.control.quaternary
    );
    this.setPreviousStatement(true);
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('hasnext', this.nextConnection != null);
    return container;
  },
  domToMutation: function(xmlElement) {
    var hasNext = (xmlElement.getAttribute('hasnext') == 'true');
    this.setNextStatement(hasNext);
  }
};

Blockly.Blocks['control_wait'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_wait",
      "message0": Blockly.Msg.CONTROL_WAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "DURATION"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_wait_or_until'] = {
  /**
   * Block to wait (pause) or until <cond> stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_wait_or_until",
      "message0": Blockly.Msg.CONTROL_WAITORUNTIL,
      "args0": [
        {
          "type": "input_value",
          "name": "DURATION"
        },
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_modify_counter_to'] = {
  /**
   * Block to modify counter to a number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_modify_counter_to",
      "message0": Blockly.Msg.CONTROL_MODIFYCOUNTERTO,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_incr_counter_by'] = {
  /**
   * Block to incr counter to a number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_incr_counter_by",
      "message0": Blockly.Msg.CONTROL_INCRCOUNTERBY,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_decr_counter_by'] = {
  /**
   * Block to decr counter to a number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_decr_counter_by",
      "message0": Blockly.Msg.CONTROL_DECRCOUNTERBY,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_wait_until'] = {
  /**
   * Block to wait until a condition becomes true.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_WAITUNTIL,
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_repeat_until'] = {
  /**
   * Block to repeat until a condition becomes true.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_REPEATUNTIL,
      "message1": "%1",
      "message2": "%1",
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_if_else_reporter'] = {
  /**
   * no documentation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_IFELSEREPORTER,
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "ONTRUE"
        },
        {
          "type": "input_value",
          "name": "ONFALSE"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

Blockly.Blocks['control_unless_else_reporter'] = {
  /**
   * no documentation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_UNLESSELSEREPORTER,
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "ONTRUE"
        },
        {
          "type": "input_value",
          "name": "ONFALSE"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

Blockly.Blocks['control_error_reporter'] = {
  /**
   * Block to report error
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_ERRORREPORTER,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

Blockly.Blocks['control_while'] = {
  /**
   * Block to repeat until a condition becomes false.
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_WHILE,
      "message1": "%1",
      "message2": "%1",
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_race'] = {
  /**
   * Both sections race against eachother, last one gets canceled.
   */
  init: function() {
    this.jsonInit({
      "type": "control_race",
      "message0": Blockly.Msg.CONTROL_RACE,
      "message1": "%1",
      "message2": Blockly.Msg.CONTROL_RACE_VS,
      "message3": "%1",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_try_to_do'] = {
  /**
   * no documentation
   */
  init: function() {
    this.jsonInit({
      "type": "control_try_to_do",
      "message0": Blockly.Msg.CONTROL_TRYTODO,
      "message1": "%1",
      "message2": Blockly.Msg.CONTROL_TRYTODO_ONBLOCKERROR,
      "message3": "%1",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_throw_error'] = {
  /**
   * Block
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_throw_error",
      "message0": Blockly.Msg.CONTROL_THROWERROR,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OPTS",
          "options": [
            [Blockly.Msg.CONTROL_THROWERROR_NORMAL, 'normal'],
            [Blockly.Msg.CONTROL_THROWERROR_FATAL, 'fatal']
          ]
        },
        {
          "type": "input_value",
          "name": "ERRORMESSAGE"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_stop_object'] = {
  /**
   * Block
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_throw_error",
      "message0": Blockly.Msg.CONTROL_STOPOBJECT,
      "args0": [
        {
          "type": "input_value",
          "name": "OBJMENU"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_stop_object_menu'] = {
  /**
   * menu
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECT",
          "options": [
          ]
        }
      ],
      "extensions": ["colours_control", "output_string"]
    });
  }
};

Blockly.Blocks['control_for_each'] = {
  /**
   * Block for for-each.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_for_each",
      "message0": Blockly.Msg.CONTROL_FOREACH,
      "message1": "%1",
      "args0": [
        {
          "type": "field_variable",
          "name": "VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_start_as_clone'] = {
  /**
   * Block for "when I start as a clone" hat.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_start_as_clone",
      "message0": Blockly.Msg.CONTROL_STARTASCLONE,
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_hat"]
    });
  }
};

Blockly.Blocks['control_create_clone_of_menu'] = {
  /**
   * Create-clone drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CLONE_OPTION",
          "options": [
            [Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF, '_myself_']
          ]
        }
      ],
      "extensions": ["colours_control", "output_string"]
    });
  }
};

Blockly.Blocks['control_create_clone_of'] = {
  /**
   * Block for "create clone of..."
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_start_as_clone",
      "message0": Blockly.Msg.CONTROL_CREATECLONEOF,
      "args0": [
        {
          "type": "input_value",
          "name": "CLONE_OPTION"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_delete_clones_of'] = {
  /**
   * Block for "delete clones of..."
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_delete_clones_of",
      "message0": Blockly.Msg.CONTROL_DELETECLONESOF,
      "args0": [
        {
          "type": "input_value",
          "name": "CLONE_OPTION"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_break'] = {
  /**
   * Block for "break"
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_BREAK,
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_end"]
    });
  }
};

Blockly.Blocks['control_continue'] = {
  /**
   * Block for "continue"
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_CONTINUE,
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_end"]
    });
  }
};

Blockly.Blocks['control_wait_a_tick'] = {
  /**
   * no documentation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_WAITATICK,
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_delete_this_clone'] = {
  /**
   * Block for "delete this clone."
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_DELETETHISCLONE,
      "args0": [
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_end"]
    });
  }
};

Blockly.Blocks['control_delete'] = {
  /**
   * Block delete clone smth
   * @this Blockly.Block
   */
  init: function() {
    var OTHER_CLONES_WITHIN_PARENT = 'other clones within parent';
    var THIS_CLONE = 'this clone';
    var ALL_CLONES_WITHIN_EXPERIENCE = 'all clones within experience';
    var OTHER_CLONES_WITHIN_EXPERIENCE = 'other clones within experience';
    var deleteDropdown = new Blockly.FieldDropdown(function() {
      if (this.sourceBlock_ &&
          this.sourceBlock_.nextConnection &&
          this.sourceBlock_.nextConnection.isConnected()) {
        return [
          [Blockly.Msg.CONTROL_DELETE_OTHERCLONESWITHINPARENT, OTHER_CLONES_WITHIN_PARENT],
          [Blockly.Msg.CONTROL_DELETE_OTHERCLONESWITHINEXPERIENCE, OTHER_CLONES_WITHIN_EXPERIENCE],
          [Blockly.Msg.CONTROL_DELETE_ALLCLONESIWTHINEXPERIENCE, ALL_CLONES_WITHIN_EXPERIENCE]
        ];
      }
      return [[Blockly.Msg.CONTROL_DELETE_THISCLONE, THIS_CLONE],
        [Blockly.Msg.CONTROL_DELETE_OTHERCLONESWITHINPARENT, OTHER_CLONES_WITHIN_PARENT],
        [Blockly.Msg.CONTROL_DELETE_OTHERCLONESWITHINEXPERIENCE, OTHER_CLONES_WITHIN_EXPERIENCE],
        [Blockly.Msg.CONTROL_DELETE_ALLCLONESIWTHINEXPERIENCE, ALL_CLONES_WITHIN_EXPERIENCE]
      ];
    }, function(option) {
      Blockly.Events.setGroup(true);
      var oldMutation = Blockly.Xml.domToText(this.sourceBlock_.mutationToDom());
      this.sourceBlock_.setNextStatement(((option == ALL_CLONES_WITHIN_EXPERIENCE) || (option == OTHER_CLONES_WITHIN_EXPERIENCE) || (option == OTHER_CLONES_WITHIN_PARENT)));
      var newMutation = Blockly.Xml.domToText(this.sourceBlock_.mutationToDom());
      Blockly.Events.fire(new Blockly.Events.BlockChange(this.sourceBlock_,
          'mutation', null, oldMutation, newMutation));
      this.setValue(option);
      Blockly.Events.setGroup(false);
      return null;
    });
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROL_DELETE)
        .appendField(deleteDropdown, 'DELETE_OPTION');
    this.setCategory(Blockly.Categories.control);
    this.setColour(Blockly.Colours.control.primary,
        Blockly.Colours.control.secondary,
        Blockly.Colours.control.tertiary,
        Blockly.Colours.control.quaternary
    );
    this.setPreviousStatement(true);
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('hasnext', this.nextConnection != null);
    return container;
  },
  domToMutation: function(xmlElement) {
    var hasNext = (xmlElement.getAttribute('hasnext') == 'true');
    this.setNextStatement(hasNext);
  }
};

Blockly.Blocks['control_delete_clone_with_id'] = {
  /**
   * Block to delete a clone with the provided ID.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_delete_clone_with_id",
      "message0": Blockly.Msg.CONTROL_DELETECLONEWITHID,
      "args0": [
        {
          "type": "input_value",
          "name": "CLONE_OPTION"
        },
        {
          "type": "input_value",
          "name": "CLONEID"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_delete_clone_with_id_menu'] = {
  /**
   * Delete-clone drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CLONE_OPTION",
          "options": [
            [Blockly.Msg.CONTROL_DELETECLONEWITHID_MYOWN, '_myself_']
          ]
        }
      ],
      "extensions": ["colours_control", "output_string"]
    });
  }
};


Blockly.Blocks['control_is_clone'] = {
  /**
   * Block to check if object is a clone.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_ISCLONE,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_boolean"]
    });
  }
};

Blockly.Blocks['control_is_original'] = {
  /**
   * Block to check if object is not a clone.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_ISORIGINAL,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_boolean"]
    });
  }
};

Blockly.Blocks['control_clone_id'] = {
  /**
   * Block to get the clone id.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_CLONEID,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

Blockly.Blocks['control_amount_of_all_clones'] = {
  /**
   * Block to get the amount of the global clones.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_AMOUNTOFALLCLONES,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

Blockly.Blocks['control_amount_of_my_clones'] = {
  /**
   * Block to get the amount of the caller object's clones.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_AMOUNTOFMYCLONES,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

Blockly.Blocks['control_get_counter'] = {
  /**
   * Block to get the counter value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_COUNTER,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

Blockly.Blocks['control_incr_counter'] = {
  /**
   * Block to add one to the counter value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_INCRCOUNTER,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_decr_counter'] = {
  /**
   * Block to minus one to the counter value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_DECRCOUNTER,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_clear_counter'] = {
  /**
   * Block to clear the counter value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_CLEARCOUNTER,
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_run_flag'] = {
  /**
   * Block to restart the experience
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_run_flag",
      "message0": Blockly.Msg.CONTROL_RUNFLAG,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "green-flag.svg",
          "width": 24,
          "height": 24,
          "alt": "flag"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_all_at_once'] = {
  /**
   * Block to run the contained script that is designed to run all of the contained blocks within a single frame.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_ALLATONCE,
      "message1": "%1", // Statement
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_run_if'] = {
  /**
   * Block to run if 
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_run_if",
      "message0": Blockly.Msg.CONTROL_RUNIF,
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OPTS",
          "options": [
            [Blockly.Msg.CONTROL_RUNIF_CLONE, 'clone'],
            [Blockly.Msg.CONTROL_RUNIF_ORIGINAL, 'original']
          ]
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_chance'] = {
  /**
   * chance
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_CHANCE,
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "PERCENT"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_chance_on_not'] = {
  /**
   * chance with else
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_CHANCE,
      "message1": "%1", // Statement
      "message2": Blockly.Msg.CONTROL_CHANCE_ONNOT,
      "message3": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "PERCENT"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_switch'] = {
  /**
   * switch
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_SWITCH,
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "REPORTER"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_switch_combined_default'] = {
  /**
   * switch with default
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_SWITCH,
      "message1": "%1", // Statement
      "message2": Blockly.Msg.CONTROL_SWITCH_DEFAULT,
      "message3": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "REPORTER"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_case'] = {
  /**
   * case
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_CASE,
      "message1": "%1", // Statement
      "message2": Blockly.Msg.CONTROL_CASE_BREAK,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};


Blockly.Blocks['control_new_thread'] = {
  /**
   * no documentation yet
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_NEWTHREAD,
      "message1": "%1", // Statement
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_run_at_turbo_mode'] = {
  /**
   * no documentation yet
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_RUNATTURBOMODE,
      "message1": "%1", // Statement
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_run_simultanously'] = {
  /**
   * no documentation yet
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_RUNSIMULTANOUSLY,
      "message1": "%1", // Statement
      "message2": Blockly.Msg.CONTROL_RUNSIMULTANOUSLY_AND,
      "message3": "%1", // Statement
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};


Blockly.Blocks['control_run_if_clone'] = {
  /**
   * runs code if clone
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_RUNIFCLONE,
      "message1": "%1", // Statement
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_run_if_original'] = {
  /**
   * runs code if original
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROL_RUNIFORIGINAL,
      "message1": "%1", // Statement
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_forever_if'] = {
  /**
   * Forever if
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_forever_if",
      "message0": Blockly.Msg.CONTROL_FOREVERIF,
      "message1": "%1",
      "message2": "%1",
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};
