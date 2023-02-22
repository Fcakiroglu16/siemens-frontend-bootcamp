import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RealProductAPIService {
  constructor() {}

  save(name: string) {
    console.log("gerçek api'ya istek yapılık kayıt oluşturuldu");
  }

  getAll(): string[] {
    return ['real ahmet', 'real mehmet', 'real hasan'];
  }
}
