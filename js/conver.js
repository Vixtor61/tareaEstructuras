var convertor = {
    convertir: (n,uni1,uni2,type) => {
        if(type == "L"){
            if(uni1 == "m" && uni2 == "cm"){
                return n*100;
            }
            if(uni1 == "k" && uni2 == "m"){
                return n*1000;
            }
            if(uni1 == "ft" && uni2 == "m"){
                return n*0.305;
            }
        }
        if(type = "T"){
            if(uni1 == "c" && uni2 == "f"){
                return n/1.8-32;
            }
            if(uni1 == "kel" && uni2 == "f"){
                return n/1.8+459.67;
            }
            if(uni1 == "kel" && uni2 == "c"){
                return kel-273.15;
            }
        }
    }
}

convertor.convertir(100,"m","cm","L");