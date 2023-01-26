const mySerial = Utility.encodeSerial(control.deviceSerialNumber())

let kod = 12
let skupina = 5
let kontrolkod = 0
let kontrolskupina = 0
let code:boolean = false
let group:boolean = false 

radio.setGroup(skupina)

input.onButtonPressed(Button.A, function () {
    console.log("kod")
    console.log(kod)
    radio.sendNumber(kod)
    
})

radio.onReceivedValue(function(name: string, value: number) {
    if (Utility.decodeSerial(name) === control.deviceSerialNumber()) {
        kontrolkod = value
        code = true
        basic.showString("H")
        basic.clearScreen()
        
        
    }   
    if (name == "grp") {
        kontrolskupina = value
        group = true
        basic.showString("G")
        basic.clearScreen()
        
        
    }
    
})

if (code && group) {
    skupina = kontrolskupina
    kod = kontrolkod 
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    
    
    
}

input.onButtonPressed(Button.B, function() {
    basic.showString("reset")
    let kod = 12
    let skupina = 5
    let kontrolkod = 0
    let kontrolskupina = 0
    let code = false
    let group = false
})


