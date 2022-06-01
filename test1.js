function  quadratic(a,b,c){
    let delta = (b*b) - (4*a*c);
    if (delta<0) {
        console.log("Phương trình vô nghiệm");
    } else { 
        if (delta>0) {
            let x1 = (Math.sqrt(delta) - b)/(2*a);
            let x2 = (-Math.sqrt(delta) - b)/(2*a);
            console.log(`phương trình có 2 nghiệm ${x1.toFixed(2)} và ${x2.toFixed(2)}`);
        } else {
            let x = -(b/2*a);
            console.log(`phương trình có nghiệm kép là: ${x.toFixed(2)}`);
        }
    }
}
quadratic(8,12,-20);