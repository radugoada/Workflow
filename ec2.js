function ecuatie2()

{
    
    this.citeste =  function () {};
        this.rezolva = function() {};
        this.afiseaza = function() {};
}

function citeste()

{

	var val_a = document.getElementById("a").value;

	var val_b = document.getElementById("b").value;

	var val_c = document.getElementById("c").value;

	

	var coef = {a:val_a, b:val_b, c:val_c};

	

	return coef;

}

//-------------------------------------

function rezolva_ec2(coef)

{

	var delta = coef.b * coef.b - 4 * coef.a * coef.c;

	var sol_x1, sol_x2;

	if (delta >= 0){

		sol_x1 = {re:(-coef.b + Math.sqrt(delta)) / (2 * coef.a), im:0}

		sol_x2 = {re:(-coef.b - Math.sqrt(delta)) / (2 * coef.a), im:0};

	}

	else{

		sol_x1 = {re:-coef.b / (2 * coef.a), im: Math.sqrt(-delta) / (2 * coef.a)};

		sol_x2 = {re:-coef.b / (2 * coef.a), im:-Math.sqrt(-delta) / (2 * coef.a)};

	}

	var solutii = {x1:sol_x1, x2:sol_x2};

	return solutii;

}

//-------------------------------------

function afiseaza_solutie(x, id)

{

	document.getElementById(id).innerHTML = x.re + "+" + x.im + "i";

}

//-------------------------------------

function rezolva()

{
     var e = new ecuatie2();
     e.citeste();
     e.calculeaza();
     e.afiseaza();
     

	var coef = citeste();

	var solutii = rezolva_ec2(coef);

	afiseaza_solutie(solutii.x1, "x1");

	afiseaza_solutie(solutii.x2, "x2");

}

//-------------------------------------
