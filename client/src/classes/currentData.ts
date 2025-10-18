
export class currentData {
      continent: string;
      country: string;
      region:string;
      constructor() {
            this.continent = "North America"
            this.country = "United States"
            this.region = "Florida"
      }

      currentContinent(): string {
            return this.continent
      }

      currentCountry(): string {
            return this.country
      }

      currentRegion(): string {
            return this.region
      }

      setCurrentContinent(continent: string): void {
            this.continent = continent
      }

      setCurrentCountry(country:string):void{
            this.country = country;
      }

      setCurrentRegion(region: string): void{
            this.region = region;
      }
}