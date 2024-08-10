export let vehicleConfig = {
    vehicleName: null,

    engine: {
        temperature: null,
        oilPressure: null,
        speed: null,
    },

    fuel: {
        water_in_fuel: null,
        temperature: null,
        level: null,
        pressure: null,
    },

    drive: {
        brake_control: null,
        pedal_sensor: null,
        transmission_pressure: null,
    },

    misc: {
        exhaust_gas_temperature: null,
        hydraulic_pump_rate: null,
        air_filter_pressure: null,
        system_voltage: null,
    }
}


export let inspectionConfig = {
    header: {
        tructSerialNo: null,
        truckModel: null,
        inspectionID: null,
        inspectionDate: null,
        inspectionLocation: null,
        inspectionCoords: null,
        inspectorName: null,
        inspectorEmployeeID: null,
        odometerReading: null,
        inspectorSignature: null,
        customerID: null,
        customerName: null,
    },

    tyres: {
        tyrePressureFrontLeft: null,
        tyrePressureFrontRight: null,
        tyrePressureRearLeft: null,
        tyrePressureRearRight: null,
    }

}

export let legalCommands = [
    "set",
    "unset",
    "remove",
    "vehicle",
    "engine",
    "fuel",
    "drive",
    "misc"
]

export let vehicleCommands = {
    "set": [
        "truct serial number",
        "truct model",
        "inspection id",
        "inspection date",
        "inspection location",
        "inspector name",
        "inspector employee id",
        "odometer reading",
        "service meter hours",
        "customer id",
        "customer name",
    ],
    "unset": [
        "truct serial number",
        "truct model",
        "inspection id",
        "inspection date",
        "inspection location",
        "inspector name",
        "inspector employee id",
        "odometer reading",
        "service meter hours",
        "customer id",
        "customer name",
    ],
    "remove": {},
}