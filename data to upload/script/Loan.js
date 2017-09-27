function display(frm)
{
	if(frm.checkValidity())
	{
		
		var name = frm.txtName.value;
		var mobile = frm.txtMob.value;
		var loanAmt = frm.loandetails.options[frm.loandetails.selectedIndex].text;
		//var duration = frm.loandetails.value;
		
		 if(frm.loandetails.selectedIndex==1)
		 {
		 var duration = 1;
		 }
		if(frm.loandetails.selectedIndex==2)
		 {
		 var duration = 5;
		 }
		 if(frm.loandetails.selectedIndex==3)
		 {
		 var duration = 10;
		 }
		
		alert('Dear '+name+', Your Mobile Number : '+mobile+' Your selected Loan amount is '+loanAmt + " to pay duration is "+duration+'years');
		
		
		
	}
	
}