const profile = {
  name: 'Alex',
  age: 20,
  cords: {
    lat: 20,
    lng: 19
  },
  steAge(age: number): void {
    this.age = age;
  }

}

const { age }: { age: number } = profile;

//onst { lng }: {lng: number} = profile.cords;


const { cords: { lng, lat } }: { cords: { lng: number; lat: number } } = profile
