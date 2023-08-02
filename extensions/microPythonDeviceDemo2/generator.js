/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Python.microPython_pin_setDigitalOutputDemo = function (block) {
        const pin = block.getFieldValue('PIN') || '0';
        const level = Blockly.Python.valueToCode(block, 'LEVEL', Blockly.Python.ORDER_FUNCTION_CALL) || '1';

        return `pin${pin}.value(${level})\n`;
    };

    return Blockly;
}


exports = registerGenerators;
