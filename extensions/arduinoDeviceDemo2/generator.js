/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.arduino_pin_setDigitalOutputDemo = function (block) {
        const arg0 = block.getFieldValue('PIN') || '0';
        const arg1 = Blockly.Arduino.valueToCode(block, 'LEVEL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 'LOW';
        const code = `digitalWrite(${arg0}, ${arg1});\n`;
        return code;
    };

    return Blockly;
}


exports = registerGenerators;
