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