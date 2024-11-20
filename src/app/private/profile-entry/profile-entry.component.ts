import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-profile-entry',
  templateUrl: './profile-entry.component.html',
  styleUrls: ['./profile-entry.component.scss']
})
export class ProfileEntryComponent {
  public data: any;
  profileForm!: FormGroup;
  public collectionName:string='profile';
  private dataSubscription: Subscription; // Store the subscription
  constructor(private firestoreService: FirestoreService,private fb: FormBuilder,private dataTransferSvc:DataTransferService,private router:Router) {
    this.dataSubscription = this.dataTransferSvc.currentData.subscribe(
      (data:any) => {
        if(data)
          this.data = data;
        console.log('Received Data:', this.data);
        this.dataSubscription.unsubscribe();
      }
    );
  }

  ngOnInit(): void {
    
    this.createForm();
    if(!this.data){
    this.addWorkExperience();
    this.addSocialOrWeb();
    this.addLanguageSkill();
    this.addEducation();
    this.addDigitalSkill();
    }else{
      this.patchFormValues();
    }
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  createForm() {
    this.profileForm = this.fb.group({
      //id: [''],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      // age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,12}$')]],
      aboutMe: ['', Validators.required],

      // Dynamic Arrays
      profileWorkExperiences: this.fb.array([]),
      profileSocialOrWebs: this.fb.array([]),
      profileEducationAndTrainings: this.fb.array([]),
      profileLanguageSkills: this.fb.array([]),
      profileDigitalSkills: this.fb.array([]),
      isActive:true
    });
  }

  // Getters for form arrays
  get workExperiences() {
    return this.profileForm.get('profileWorkExperiences') as FormArray;
  }

  get socials() {
    return this.profileForm.get('profileSocialOrWebs') as FormArray;
  }

  get educations() {
    return this.profileForm.get('profileEducationAndTrainings') as FormArray;
  }

  get languages() {
    return this.profileForm.get('profileLanguageSkills') as FormArray;
  }

  get digitalSkills() {
    return this.profileForm.get('profileDigitalSkills') as FormArray;
  }

  // Methods to add new form groups to the arrays
  addWorkExperience() {
    this.workExperiences.push(
      this.fb.group({
        id: [''],
        name: ['', Validators.required],
        fromdate: ['', Validators.required],
        toDate: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        // address: ['', Validators.required],
        // email: ['', [Validators.required, Validators.email]],
        // department: ['', Validators.required],
        // business: ['', Validators.required],
        description: ['']
      })
    );
  }

  addSocialOrWeb() {
    this.socials.push(
      this.fb.group({
        id: [''],
        text: ['', Validators.required],
        description: ['']
      })
    );
  }

  addEducation() {
    this.educations.push(
      this.fb.group({
        id: [''],
        certificateName: ['', Validators.required],
        institution: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        web: [''],
        address: [''],
        grade: ['']
      })
    );
  }

  addLanguageSkill() {
    this.languages.push(
      this.fb.group({
        id: [''],
        name: ['', Validators.required],
        level: ['', Validators.required]
      })
    );
  }

  addDigitalSkill() {
    this.digitalSkills.push(
      this.fb.group({
        id: [''],
        name: ['', Validators.required],
        level: ['', Validators.required]
      })
    );
  }

  // Handle form submission
  onSubmit() {
    if (this.profileForm.valid) {
      console.log(JSON.stringify(this.profileForm.value));
      // Process form data
      if(!this.data)
        this.firestoreService.saveData(this.collectionName,this.profileForm.value);
       else{
        this.firestoreService.updateData(this.collectionName,this.data.id,this.profileForm.value);
       }

       this.router.navigate(['/private/profileList']);
    } else {
      this.profileForm.markAllAsTouched(); // Trigger validation messages
    }
  }

  // Remove a form group from a FormArray
  removeWorkExperience(index: number) {
    this.workExperiences.removeAt(index);
  }

  removeSocial(index: number) {
    this.socials.removeAt(index);
  }

  removeEducation(index: number) {
    this.educations.removeAt(index);
  }

  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }

  removeDigitalSkill(index: number) {
    this.digitalSkills.removeAt(index);
  }

  
  // Patch the form with data
  patchFormValues() {
    this.profileForm.patchValue({
      id: this.data.id || '',
      firstName: this.data.firstName || '',
      lastName: this.data.lastName || '',
      address: this.data.address || '',
      email: this.data.email || '',
      phone: this.data.phone || '',
      aboutMe: this.data.aboutMe || '',
      isActive: this.data.isActive || true
    });

    // Patch form arrays (Work Experiences, Socials, etc.)
    if (this.data.profileWorkExperiences) {
      this.data.profileWorkExperiences.forEach((workExperience: any) => {
        this.workExperiences.push(
          this.fb.group({
            id: [workExperience.id || ''],
            name: [workExperience.name || '', Validators.required],
            fromdate: [workExperience.fromdate || '', Validators.required],
            toDate: [workExperience.toDate || '', Validators.required],
            city: [workExperience.city || '', Validators.required],
            country: [workExperience.country || '', Validators.required],
            description: [workExperience.description || '']
          })
        );
      });
    }

    if (this.data.profileSocialOrWebs) {
      this.data.profileSocialOrWebs.forEach((socialOrWeb: any) => {
        this.socials.push(
          this.fb.group({
            id: [socialOrWeb.id || ''],
            text: [socialOrWeb.text || '', Validators.required],
            description: [socialOrWeb.description || '']
          })
        );
      });
    }

    if (this.data.profileEducationAndTrainings) {
      this.data.profileEducationAndTrainings.forEach((education: any) => {
        this.educations.push(
          this.fb.group({
            id: [education.id || ''],
            certificateName: [education.certificateName || '', Validators.required],
            institution: [education.institution || '', Validators.required],
            city: [education.city || '', Validators.required],
            country: [education.country || '', Validators.required],
            web: [education.web || ''],
            address: [education.address || ''],
            grade: [education.grade || '']
          })
        );
      });
    }

    if (this.data.profileLanguageSkills) {
      this.data.profileLanguageSkills.forEach((language: any) => {
        this.languages.push(
          this.fb.group({
            id: [language.id || ''],
            name: [language.name || '', Validators.required],
            level: [language.level || '', Validators.required]
          })
        );
      });
    }

    if (this.data.profileDigitalSkills) {
      this.data.profileDigitalSkills.forEach((digitalSkill: any) => {
        this.digitalSkills.push(
          this.fb.group({
            id: [digitalSkill.id || ''],
            name: [digitalSkill.name || '', Validators.required],
            level: [digitalSkill.level || '', Validators.required]
          })
        );
      });
    }
  }
  backToProfileList(){
    try {
      this.router.navigate(['/private/profileList']);
    } catch (error) {
      
    }
  }
}
