import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function invalidEmailDomain(invalidDomains: string[]): ValidatorFn {
    return (control: AbstractControl) => {
        const value = control.value?.toLowerCase();

        if (!value)
            return null;

        const matches = invalidDomains.some(domain => value.indexOf(`@${domain}`) > 0);

        return matches ? { invalidEmailDomain: true } : null;
    };
}