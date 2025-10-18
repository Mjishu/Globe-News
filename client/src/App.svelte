<script lang="ts">
  import { currentData } from "./classes/currentData";
  import rawLocationData from "../data/location.json";

  interface RegionData {
    name: string;
    regions: string[]
  }
  interface ContinentData {
    name: string;
    countries: RegionData[]
  }

  interface LocationData{
    continents: ContinentData[]
  }
  
  const data = new currentData()
  const locationData: LocationData = rawLocationData;
  let showLocationInformation: boolean = $state<boolean>(false);

    /*Returns the countries in a continent, if the continent name matches*/
  function correctContinent(continentName: string): string[] {
    let locationArray: string[] = [];
    for (let continentItem of locationData.continents) {
      if (continentItem.name == continentName) {
        for (let countryItem of continentItem.countries) {
          locationArray.push(countryItem.name)
        }
      }
    }
    return locationArray
  }
  /**returns the regions in a selected country*/
  function correctCountry(continentName: string, countryName: string) {
    let locationArray: string[] = []
    for (let continentItem of locationData.continents) {
      if (continentItem.name == continentName) {
        for (let countryItem of continentItem.countries) {
          if( countryItem.name == countryName) {
            countryItem.regions.forEach(region => {
                locationArray.push(region)
            });
          }
        }
      }}
      return locationArray
  }
  
</script>

<main>
  <div>
    <h1>Globe News</h1>
    <p>You are in {data.currentContinent()}/{data.currentCountry()}/{data.currentRegion()}</p>
    <button onclick={() => showLocationInformation = !showLocationInformation}>Change Location</button>
    {#if showLocationInformation === true} 
      <h1>Continent</h1>
      <select name="Continent" id="continent">
        {#each locationData.continents as item}
        <option value={item.name}>{item.name}</option>
        {/each}
      </select>

       <select name="Country" id="country">
        {#each correctContinent(data.currentContinent()) as item}
        <option value={item}>{item}</option>
        {/each}
      </select>

       <select name="Region" id="region">
        {#each correctCountry(data.currentContinent(), data.currentCountry()) as item}
        <option value={item}>{item}</option>
        {/each}
      </select>
    {/if}
  </div>
</main>

<!-- <main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main> -->

<style>
</style>
