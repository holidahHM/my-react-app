export default class insuranceErrors{
    static addDate(enddate, days) {
        var result = new Date(enddate);
        result.setDate(result.getDate() - days);
        return result.toDateString();
    }

    static getErrorMessages(errCode) {
        switch (errCode) {
            case 401:
                return 'Failed! please input product name';
            case 402:
                return 'Failed! Data exists in the database';
            case 403:
                return 'Failed! invalid data types';
            default:
                return 'unexpected error';
        }
    }
    static getErrorInternalUser(errorCode) {
        switch (errorCode) {
            case 401:
                return 'Failed! please input username';
            case 402:
                return 'Failed! Data exists in the database';
            case 403:
                return 'Failed! invalid data types';
            default:
                return 'unexpected error';
        }
    }

    static getErrorExternalUser(errorCodes){
        switch (errorCodes) {
            case 401:
                return 'Failed! please input username';
            case 402:
                return 'Failed! Data exists in the database';
            case 403:
                return 'Failed! invalid data types';
            default:
                return 'unexpected error';
        }
    }

    static getErrorsLeads(errorCodeLead){
        switch (errorCodeLead) {
            case 401:
                return 'Failed! please lead name';
            case 402:
                return 'Failed! Data exists in the database';
            case 403:
                return 'failed to register lead because a lead with the same name already exists';
            default:
                return 'unexpected error';
        }
    }

    static getErrorsProspects(errorCodeProspects){
        switch (errorCodeProspects) {
            case 401:
                return 'Prospect registration failed. Please input prospectname ';
            case 402:
                return 'Failed! invalid data types';
            case 403:
                return 'failed to register prospect because a prospect with the same name already exists';
            default:
                return 'unexpected error';
        }
    }
    static getRequestParams(searchTitle, selLimit, status) {
      let params = {};

      if (searchTitle) {
        params["q"] = searchTitle;
      }

      if (selLimit) {
        params["limit"] = selLimit;
      }
      if (status) {
          params["claim_status"] = status;
      }

      return params;
    }
    static getRequestParams_Users(JsonFile) {
      let params = {};
      if (JsonFile) {
        params["json"] = JsonFile;
      }
      return params;
    }

    static date_diff_indays = function(date1, date2) {
        const dt1 = new Date(date1);
        const dt2 = new Date(date2);
        return Math.floor(
            (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
                Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }
    static dependantsAgeLimit = function (date1) {
        const currDate = new Date();
        const dt1 = new Date(date1);
        return Math.floor(
            (Date.UTC(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()) -
                Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }
    static calcMedCoverQuote = function (selectedCover) {
        return selectedCover * 12;
    }

    static balanceCF = function(basicPremium, duePremium, amountPaid) {
        let x = (((basicPremium * 10000 - duePremium * 10000) + amountPaid * 10000) - basicPremium * 10000) / 10000;
        return x;
    }

    static paidtoInsurer = function (P_commission, basicPremium, Wtax, duePremium) {
        // let stampduty = 0;
        // let trainingLevi = 56;
        // let policyHCF = 70;
        // let statuoryCharges = (stampduty + trainingLevi + policyHCF);

        // let otherCharges = 0;
        // let policyCharges = 0;
        // let brockerDiscount = 0;
        // let AdditionalCharges = (otherCharges + policyCharges + brockerDiscount);

        // let z = statuoryCharges + AdditionalCharges;

        // let finddueP = basicPremium + z;

        let x = (P_commission / 100) * basicPremium;
        let y = (Wtax / 100) * x; 
        let netCommission = x - y;

        let paidtoInsurerfunc = duePremium - netCommission;
        return   paidtoInsurerfunc
    }
    static allocatedAmount = function (allocatedAmt, AccountBal) {
        
        let x = AccountBal - allocatedAmt;
        return x;
     
    }
    
}