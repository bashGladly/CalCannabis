//lwacht: update altid based on altId assigned when the record was created
try{
	newAltId = AInfo["AltId"];
	var updAltId = aa.cap.updateCapAltID(capId,newAltId);
	if(!updAltId.getSuccess()){
		logDebug("Error updating Alt Id: " + newAltId + ":: " +updAltId.getErrorMessage());
	}else{
		logDebug("Deficiency record ID updated to : " + newAltId);
	}
	//lwacht
	//notify processor(s) that the amendment record has been submitted and activate the appropriate task
	deficiencySubmitted();
} catch(err){
	logDebug("An error has occurred in CTRCA:LICENSES/CULTIVATOR/*/AMENDMENT: AltId Update: " + err.message);
	logDebug(err.stack);
	aa.sendMail(sysFromEmail, debugEmail, "", "An error has occurred in CTRCA:LICENSES/CULTIVATOR/*/AMENDMENT: AltId Update: "+ startDate, capId + br + err.message+ br+ err.stack + br + currEnv);
}