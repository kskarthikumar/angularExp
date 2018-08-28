import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
    templateUrl: './contactUs.component.html'
})
export class contactUsComponent {
    formdata;
    constructor() { }
    ngOnInit() {
        this.formdata = new FormGroup({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")
            ]))
        })

    }

    validateCForm(fvalue) {
        let fname = fvalue.value;
        console.log(fname.firstname);
        let emailVal = fname.email;
        console.log('emailVal is %s',emailVal);

        const emailtt = new FormControl('bad@', Validators.email);

        console.log(emailtt.errors);
    }
}
