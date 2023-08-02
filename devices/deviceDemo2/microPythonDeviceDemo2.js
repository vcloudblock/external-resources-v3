// eslint-disable-next-line  func-style, require-jsdoc
function registerDevice () {
    const _global = (typeof global === 'undefined') ? window : global; // eslint-disable-line no-undef, max-len

    const BlockType = _global.Scratch.BlockType;
    const ArgumentType = _global.Scratch.ArgumentType;
    const CommonPeripheral = _global.Scratch.CommonPeripheral;
    const formatMessage = _global.Scratch.formatMessage;

    /**
     * The list of USB device filters.
     * @readonly
     */
    const PNPID_LIST = [
    // CH340
        'USB\\VID_1A86&PID_7523',
        // CH9102
        'USB\\VID_1A86&PID_55D4',
        // CP2102
        'USB\\VID_10C4&PID_EA60'
    ];

    /**
     * Configuration of serialport
     * @readonly
     */
    const SERIAL_CONFIG = {
        baudRate: 115200,
        dataBits: 8,
        stopBits: 1
    };

    /**
     * Configuration for esptool
     * @readonly
     */
    const DIVECE_OPT = {
        type: 'microPython',
        chip: 'esp32',
        baud: {
            darwin: '460800',
            linux: '460800',
            win32: '921600'
        },
        firmware: 'esp32-20220618-v1.19.1.bin'
    };

    const Pins = {
        IO0: '0',
        IO1: '1',
        IO2: '2',
        IO3: '3',
        IO4: '4',
        IO5: '5',
        IO6: '6',
        IO7: '7',
        IO8: '8',
        IO9: '9',
        IO10: '10',
        IO11: '11',
        IO12: '12',
        IO13: '13',
        IO14: '14',
        IO15: '15',
        IO16: '16',
        IO17: '17',
        IO18: '18',
        IO19: '19',
        IO21: '21',
        IO22: '22',
        IO23: '23',
        IO25: '25',
        IO26: '26',
        IO27: '27',
        IO32: '32',
        IO33: '33',
        IO34: '34',
        IO35: '35',
        IO36: '36',
        IO39: '39'
    };

    const Level = {
        High: '1',
        Low: '0'
    };

    const Mode = {
        Input: 'IN',
        Output: 'OUT',
        InputPullup: 'PULL_UP',
        InputPulldown: 'PULL_DOWN'
    };

    /**
     * Manage communication with a MicroPython DeviceDemo2 peripheral over a OpenBlock Link client socket.
     */
    class MicroPythonDeviceDemo2 extends CommonPeripheral{
        /**
         * Construct a MicroPython communication object.
         * @param {Runtime} runtime - the OpenBlock runtime
         * @param {string} deviceId - the id of the extension
         * @param {string} originalDeviceId - the original id of the peripheral, like xxx_arduinoUno
         */
        constructor (runtime, deviceId, originalDeviceId) {
            super(runtime, deviceId, originalDeviceId, PNPID_LIST, SERIAL_CONFIG, DIVECE_OPT);
        }
    }

    /**
     * OpenBlock blocks to interact with a MicroPython DeviceDemo2 peripheral.
     */
    class OpenBlockMicroPythonDeviceDemo2Device {
        /**
         * @return {string} - the ID of this extension.
         */
        get DEVICE_ID () {
            return 'microPythonDeviceDemo2';
        }

        get OUT_PINS_MENU () {
            return [
                {
                    text: 'IO0',
                    value: Pins.IO0
                },
                // Used by REPL port
                // {
                //     text: 'IO1',
                //     value: Pins.IO1
                // },
                {
                    text: 'IO2',
                    value: Pins.IO2
                },
                // Used by REPL port
                // {
                //     text: 'IO3',
                //     value: Pins.IO3
                // },
                {
                    text: 'IO4',
                    value: Pins.IO4
                },
                {
                    text: 'IO5',
                    value: Pins.IO5
                }
            ];
        }

        get MODE_MENU () {
            return [
                {
                    text: formatMessage({
                        id: 'microPythonDeviceDemo2.modeMenu.input',
                        default: 'input',
                        description: 'label for input pin mode'
                    }),
                    value: Mode.Input
                },
                {
                    text: formatMessage({
                        id: 'microPythonDeviceDemo2.modeMenu.output',
                        default: 'output',
                        description: 'label for output pin mode'
                    }),
                    value: Mode.Output
                },
                {
                    text: formatMessage({
                        id: 'microPythonDeviceDemo2.modeMenu.inputPullup',
                        default: 'input-pullup',
                        description: 'label for input-pullup pin mode'
                    }),
                    value: Mode.InputPullup
                },
                {
                    text: formatMessage({
                        id: 'microPythonDeviceDemo2.modeMenu.inputPulldown',
                        default: 'input-pulldown',
                        description: 'label for input-pulldown pin mode'
                    }),
                    value: Mode.InputPulldown
                }
            ];
        }

        get LEVEL_MENU () {
            return [
                {
                    text: formatMessage({
                        id: 'microPythonDeviceDemo2.levelMenu.high',
                        default: 'high',
                        description: 'label for high level'
                    }),
                    value: Level.High
                },
                {
                    text: formatMessage({
                        id: 'microPythonDeviceDemo2.levelMenu.low',
                        default: 'low',
                        description: 'label for low level'
                    }),
                    value: Level.Low
                }
            ];
        }

        /**
         * Construct a set of MicroPython blocks.
         * @param {Runtime} runtime - the OpenBlock runtime.
         * @param {string} originalDeviceId - the original id of the peripheral, like xxx_arduinoUno
         */
        constructor (runtime, originalDeviceId) {
            /**
             * The OpenBlock runtime.
             * @type {Runtime}
             */
            this.runtime = runtime;

            // Create a new MicroPython DeviceDemo2 peripheral instance
            this._peripheral = new MicroPythonDeviceDemo2(this.runtime, this.DEVICE_ID, originalDeviceId);
        }

        /**
         * @returns {Array.<object>} metadata for this extension and its blocks.
         */
        getInfo () {
            return [
                {
                    id: 'pin',
                    name: formatMessage({
                        id: 'microPythonDeviceDemo2.category.pins',
                        default: 'Pins',
                        description: 'The name of the esp32 microPython device pin category'
                    }),
                    color1: '#4C97FF',
                    color2: '#3373CC',
                    color3: '#3373CC',

                    blocks: [
                        {
                            opcode: 'setPinMode',
                            text: formatMessage({
                                id: 'microPythonDeviceDemo2.pins.setPinMode',
                                default: 'set pin [PIN] mode [MODE]',
                                description: 'MicroPython DeviceDemo2 set pin mode'
                            }),
                            blockType: BlockType.COMMAND,
                            arguments: {
                                PIN: {
                                    type: ArgumentType.STRING,
                                    menu: 'outPins',
                                    defaultValue: Pins.IO2
                                },
                                MODE: {
                                    type: ArgumentType.STRING,
                                    menu: 'mode',
                                    defaultValue: Mode.Input
                                }
                            }
                        },
                        {
                            opcode: 'setDigitalOutputDemo',
                            text: formatMessage({
                                id: 'microPythonDeviceDemo2.pins.setDigitalOutputDemo',
                                default: 'set digital pin [PIN] out [LEVEL]',
                                description: 'MicroPython DeviceDemo2 set digital pin out'
                            }),
                            blockType: BlockType.COMMAND,
                            arguments: {
                                PIN: {
                                    type: ArgumentType.STRING,
                                    menu: 'outPins',
                                    defaultValue: Pins.IO2
                                },
                                LEVEL: {
                                    type: ArgumentType.STRING,
                                    menu: 'level',
                                    defaultValue: Level.High
                                }
                            }
                        }
                    ],
                    menus: {
                        outPins: {
                            items: this.OUT_PINS_MENU
                        },
                        mode: {
                            items: this.MODE_MENU
                        },
                        level: {
                            acceptReporters: true,
                            items: this.LEVEL_MENU
                        }
                    }
                }
            ];
        }
    }

    return OpenBlockMicroPythonDeviceDemo2Device;
}

exports = registerDevice;
