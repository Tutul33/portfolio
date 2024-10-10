import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-profile-entry',
  templateUrl: './profile-entry.component.html',
  styleUrls: ['./profile-entry.component.scss']
})
export class ProfileEntryComponent {
  public data: any[] = [];
  profileForm!: FormGroup;
  public collectionName:string='profile';
  constructor(private firestoreService: FirestoreService,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    // Fetch data on component load
    this.firestoreService.getData(this.collectionName).subscribe((res) => {
      this.data = res;
    });
  }
  createForm() {
    this.profileForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
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
      console.log(this.profileForm.value);
      // Process form data
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

  //Profile operation
  saveData() {
    const sampleData = { name: 'John Doe', age: 30 ,address:'Dhaka'};
    this.firestoreService.saveData(this.collectionName, sampleData)
      .then(() => console.log('Data saved successfully'))
      .catch((error) => console.error('Error saving data', error));
  }

  //Edit existing data
  editData(id: string) {
    const updatedData = { name: 'Jane Doe', age: 32 };
    this.firestoreService.updateData(this.collectionName, id, updatedData)
      .then(() => console.log('Data updated successfully'))
      .catch((error) => console.error('Error updating data', error));
  }

  // Delete existing data
  deleteData(id:string) {
    this.firestoreService.deleteData(this.collectionName, id)
      .then(() => console.log('Data deleted successfully'))
      .catch((error) => console.error('Error deleting data', error));
  }
}
