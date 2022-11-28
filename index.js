//Challenge 1: Student Grade Generator (Toy Problem)
function marks(grade){
    if (grade>79 && grade<=100){
        return "A"
    }
    else{
        if (grade>60 && grade<=79){
            return "B"
        }
        else{
            if (grade>49 && grade<=59){
                return "C"
            }
            else{
                if(grade>=40 && grade<=49){
                    return "D"
                }
                 else{
                    return "E"
                }

            }
    }
}
}
console.log(marks(61));

//Challenge 2: Speed Detector (Toy Problem)



function limit(speed){
    if (speed<=70){
        return "Ok"
    }else{
        let points=(speed-70)/5
        if (points>=12){
            return "License suspended"
        }else{
            return "Points:"+points
        }
    }



}
console.log(limit(85));

// Challenge 3: Net Salary Calculator (Toy Problem)
const grossSalary=50000;
function Tax(){
    if(grossSalary<24000){
        return 0.1*grossSalary
    }else if (grossSalary>24000 && grossSalary<32334){
        return 0.25*grossSalary
    }else if (grossSalary>32333){
        return 0.3*grossSalary
    }
}
console.log(Tax());

function nhifDeductions(){

    if(grossSalary<=5999){
        return grossSalary-150
    }else if (grossSalary>=6000 && grossSalary<8000){
        return grossSalary-300
    }else if(grossSalary>=8000 && grossSalary<12000){
        return grossSalary-400
    }else if(grossSalary>= 12000 && grossSalary<15000 ){
        return grossSalary-500
    }else if(grossSalary>=15000 && grossSalary<20000){
        return grossSalary-600
    }else if(grossSalary>= 20000  && grossSalary<25000){
        return grossSalary-750
    }else if(grossSalary>=25000 && grossSalary<30000){
        return grossSalary-850
    }else if(grossSalary>= 30000&& grossSalary<35000){
        return grossSalary-900
    }else if(grossSalary>=35000 && grossSalary<40000){
        return grossSalary-950
    }else if(grossSalary>=40000 && grossSalary<45000){
        return grossSalary-1000
    }else if(grossSalary>=45000 && grossSalary<50000){
        return grossSalary-1100
    }else if(grossSalary>=50000 && grossSalary<60000){
        return grossSalary-1200
    }
    else if(grossSalary>=60000 && grossSalary<70000){
        return grossSalary-1300
    }else if(grossSalary>= 70000&& grossSalary<80000){
        return grossSalary-1400
    }else if(grossSalary>=80000 && grossSalary<90000){
        return grossSalary-1500
    }else if(grossSalary>=90000 && grossSalary<100000){
        return grossSalary-1600
    }else{
        return grossSalary-1700
    }

}
console.log(nhifDeductions());


const nssfDeductions=0.06*grossSalary;


const netSalary= nhifDeductions()-nssfDeductions-Tax();
console.log(netSalary);