function countCovidStatus(covidStatusArray) {
    let obj = {}
    if(!covidStatusArray){
      return undefined
    }else if(covidStatusArray.length === 0){
      return {}
    }else{
      for(let i = 0;i < covidStatusArray.length + 1; i++){
        switch(covidStatusArray[i]){
            case 'negative and low risk':
                 if(obj['negative and low risk']){
                    obj['negative and low risk']++
                 }else{
                    obj['negative and low risk'] = 1
                 }
                break
            case 'negative and high risk':
                if(obj['negative and high risk']){
                    obj['negative and high risk']++
                 }else{
                    obj['negative and high risk'] = 1
                 }
                break
            case 'positive':
                if(obj['positive']){
                    obj['positive']++
                 }else{
                    obj['positive'] = 1
                 }
                break
        } 
      }
      return obj
    }
  }