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

goog.provide('Blockly.Blocks.looks');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['looks_sayforsecs'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAYFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_say'] = {
  /**
   * Block to say.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAY,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_saynothing'] = {
  /**
   * Say nothing block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAYNOTHING,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_thinkforsecs'] = {
  /**
   * Block to think for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINKFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_think'] = {
  /**
   * Block to think.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINK,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_thinknothing'] = {
  /**
   * Think nothing block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINKNOTHING,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_show'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SHOW,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_hide'] = {
  /**
   * Hide block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_HIDE,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_hideallsprites'] = {
  /**
   * Hide-all-sprites block. Hides all sprites.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_HIDEALLSPRITES,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_showallsprites'] = {
  /**
   * Show-all-sprites block. Shows all sprites.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SHOWALLSPRITES,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_stopspeaking'] = {
  /**
   * stops speaking
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_STOPSPEAKING,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changeeffectby'] = {
  /**
   * Block to change graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGEEFFECTBY,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
          ]
        },
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_seteffectto'] = {
  /**
   * Block to set graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETEFFECTTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_cleargraphiceffects'] = {
  /**
   * Block to clear graphic effects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changesizeby'] = {
  /**
   * Block to change size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESIZEBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changecostumeby'] = {
  /**
   * Block to change costume
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGECOSTUMEBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changebackdropby'] = {
  /**
   * Block to change backdrop
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGEBACKDROPBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setsizeto'] = {
  /**
   * Block to set size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETSIZETO,
      "args0": [
        {
          "type": "input_value",
          "name": "SIZE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_size'] = {
  /**
   * Block to report size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SIZE,
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_totallayers'] = {
  /**
   * Block to report the total layers
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_TOTALLAYERS,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_golayerinfrontofbehindobject'] = {
  /**
   * jh
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOLAYERINFRONTOFBEHINDOBJECT,
      "args0": [
        {
          "type": "input_value",
          "name": "LAYER"
        },
        {
          "type": "field_dropdown",
          "name": "OPTS",
          "options": [
            [Blockly.Msg.LOOKS_GOLAYERINFRONTOFBEHINDOBJECT_INFRONTOF, 'in front of'],
            [Blockly.Msg.LOOKS_GOLAYERINFRONTOFBEHINDOBJECT_BEHIND, 'behind']
          ]
        },
        {
          "type": "input_value",
          "name": "OBJMENU"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_golayerinfrontofbehindobject_menu'] = {
  /**
   * "* of _" object menu.
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
            ['Sprite1', 'Sprite1']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "output_string"]
    });
  }
};

Blockly.Blocks['looks_layer'] = {
  /**
   * Block to report layer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_LAYER,
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_visible'] = {
  /**
   * Block to report if object is hidden or not.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_VISIBLE,
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_boolean"]
    });
  }
};

Blockly.Blocks['looks_changestretchby'] = {
  /**
   * Block to change stretch.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESTRETCHBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setstretchto'] = {
  /**
   * Block to set stretch.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETSTRETCHTO,
      "args0": [
        {
          "type": "input_value",
          "name": "STRETCH"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changevisibilityby'] = {
  /**
   * Block to change visibility.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGEVISIBILITYBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setvisibilityto'] = {
  /**
   * Block to set visibility.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETVISIBILITYTO,
      "args0": [
        {
          "type": "input_value",
          "name": "VISIBILITY"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_gotolayer'] = {
  /**
   * "Go to [Number] layer" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOTOLAYER,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_fxtest'] = {
  /**
   * "color fx test
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_FXTEST,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_costume'] = {
  /**
   * Costumes drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COSTUME",
          "options": [
            ['costume1', 'COSTUME1'],
            ['costume2', 'COSTUME2']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "colourQuaternary": Blockly.Colours.looks.quaternary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_switchcostumeto'] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHCOSTUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "COSTUME"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextcostume'] = {
  /**
   * Block to switch the sprite's costume to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_NEXTCOSTUME,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_previouscostume'] = {
  /**
   * Block to switch the sprite's costume to the previous one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_PREVIOUSCOSTUME,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_switchbackdropto'] = {
  /**
   * Block to switch the backdrop to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTO,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdrops'] = {
  /**
   * Backdrop list
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "looks_backdrops",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
            ['backdrop1', 'BACKDROP1']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "colourQuaternary": Blockly.Colours.looks.quaternary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_gotofrontback'] = {
  /**
   * "Go to front/back" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOTOFRONTBACK,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FRONT_BACK",
          "options": [
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT, 'front'],
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK, 'back']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_goforwardbackwardlayers'] = {
  /**
   * "Go forward/backward [Number] Layers" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FORWARD_BACKWARD",
          "options": [
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD, 'forward'],
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD, 'backward']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdropnumbername'] = {
  /**
   * Block to report backdrop's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_BACKDROPNUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name'],
            [Blockly.Msg.LOOKS_NUMBERNAME_LASTNUMBER, 'last (number)'],
            [Blockly.Msg.LOOKS_NUMBERNAME_LASTNAME, 'last (name)']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_costumenumbername'] = {
  /**
   * Block to report costume's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_COSTUMENUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name'],
            [Blockly.Msg.LOOKS_NUMBERNAME_LASTNUMBER, 'last (number)'],
            [Blockly.Msg.LOOKS_NUMBERNAME_LASTNAME, 'last (name)']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_switchbackdroptoandwait'] = {
  /**
   * Block to switch the backdrop to the selected one and wait.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextbackdrop'] = {
  /**
   * Block to switch the backdrop to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_previousbackdrop'] = {
  /**
   * Block to switch the backdrop to the previous one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_PREVIOUSBACKDROP_BLOCK,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};
