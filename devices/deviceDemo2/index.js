const deviceDemo2 = formatMessage => ({
    name: formatMessage({
        id: 'deviceDemo2.name',
        default: 'Third Party Device Demo 2'
    }),
    deviceId: 'deviceDemo2',
    manufactor: 'OpenBlock',
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino', 'microPython'],
    iconURL: 'assets/deviceDemo2.png',
    description: formatMessage({
        id: 'deviceDemo2.description',
        default: 'An example showing how to add a brand new form of third-party board via the register file'
    }),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'assets/deviceDemo2-illustration.svg',
    connectionSmallIconURL: 'assets/deviceDemo2-small.svg',
    connectingMessage: formatMessage({
        id: 'deviceDemo2.connectingMessage',
        default: 'Connecting'
    }),
    translations: 'translations.js',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['kit'],
    helpLink: ''
});

const deviceDemo2Arduino = formatMessage => {
    const device = deviceDemo2(formatMessage);
    device.deviceId = 'arduinoDeviceDemo2';
    device.type = 'arduino';
    device.main = 'arduinoDeviceDemo2.js';
    device.arduinoData = 'arduinoData';
    device.firmware = 'firmwares/arduinoDeviceDemo2.hex';
    device.defaultBaudRate = '9600';
    device.programMode = ['realtime', 'upload'];
    device.defaultProgramMode = 'realtime';
    device.scratchExtensions = [];
    device.deviceExtensions = ['arduinoDeviceDemo2'];
    device.deviceExtensionsCompatible = 'arduinoEsp32';
    device.hide = true;
    return device;
};

const deviceDemo2MicroPython = formatMessage => {
    const device = deviceDemo2(formatMessage);
    device.deviceId = 'microPythonDeviceDemo2';
    device.type = 'microPython';
    device.main = 'microPythonDeviceDemo2.js';
    device.firmware = 'firmwares/esp32-20220117-v1.18.bin';
    device.defaultBaudRate = '115200';
    device.programMode = ['upload'];
    device.defaultProgramMode = 'upload';
    device.scratchExtensions = [];
    device.deviceExtensions = ['microPythonDeviceDemo2'];
    device.deviceExtensionsCompatible = 'microPythonEsp32';
    device.hide = true;
    return device;
};

module.exports = formatMessage => ([
    deviceDemo2(formatMessage),
    deviceDemo2Arduino(formatMessage),
    deviceDemo2MicroPython(formatMessage)
]);
