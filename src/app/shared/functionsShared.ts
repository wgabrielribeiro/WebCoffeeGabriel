import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appValidatorConfirm]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: FunctionsShared,
    multi: true
  }]
})

export class FunctionsShared implements Validator {

  constructor(){ }
  @Input() appValidatorConfirm!: string;

  validate(control: AbstractControl<any, any>): {[key: string]: any} | null {

      const controlToCompare = control.parent?.get(this.appValidatorConfirm);

      if(controlToCompare && controlToCompare.value !== controlToCompare.value)
      {
        return { 'notEqual': true}
      }

      return null;
  }

}

