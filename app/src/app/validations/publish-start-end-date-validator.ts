import {
  FormGroup,
  ValidatorFn,
  ValidationErrors,
  FormControl,
  AbstractControl,
} from '@angular/forms';

export function PublishStartEndDataValidator(): ValidatorFn | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const startDateValue = control.get('publishStartDate')?.value;
    const endDateValue = control.get('publishEndDate')?.value;

    if (startDateValue && endDateValue) {
      let startDate = new Date(startDateValue);
      let endDate = new Date(endDateValue);

      const isValid = endDate > startDate;
      return isValid ? null : { dataRange: true };
    }

    return null;
  };
}
