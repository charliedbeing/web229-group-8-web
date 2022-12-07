import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'stateString'})
export class StateStringPipe implements PipeTransform {
  transform(value: number |undefined): String {
    let result:String = "";

    if(value != undefined){
        if(value ==0){
            result ="Created,edit[YES]"
        }
        if(value ==1){
            result ="Published,edit[NO],answer[YES]"
        }
        if(value ==2){
            result ="Closed,edit[NO],answer[NO]"
        }
    }
   
    return result;
  }
}