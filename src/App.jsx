import React from 'react';

import Scene from './components/scene/scene';
import Item from './components/item/item';
import Page from './components/page/page';
import StatBlock from './components/stat-block/stat-block';
import Table from './components/table/table';

function App() {
  return (
    <div className="App">
      <Page title='Assault on Westwood Keep'>
        <div className='col50'>
          <h2>The Slaughter of Agridale</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus, tellus ut gravida pharetra, enim arcu consequat enim, vel volutpat libero eros vitae tellus.</p>
          <Scene>Donec in nulla non diam semper tempor. Nullam nec gravida sapien. Morbi volutpat condimentum nibh vitae luctus. Nulla vulputate turpis mauris, eu tempus dolor accumsan sed.</Scene>
          <p>Proin a ligula scelerisque, tempus lacus sodales, sagittis justo. Etiam a laoreet quam, dictum volutpat quam. Donec sodales eu libero in dignissim. Fusce venenatis neque sit amet commodo auctor. </p>
          <Table />

          <Item name='Staff of Focused Pain' type='Staff, Arcane Focus'>
            +1 Spell Attack, +1 Spell Saving Throw DC <br />
            <strong>Action:</strong> You are able to use the crystal embedded into this staff in order to focus
            your pain, recovering one expended spell slot. You are only able to do this once per day.
          </Item>
          <Item name="Death's Chill" type='Scythe, Holy Symbol'>
            +1 Attack +1 Damage (cold) <br />
            The blade of this scyteh glows with a faint blue fire that is cold to the touch. Legends say Death
            herself crated this staff and imbued into it the chill of the grave.
          </Item>
        </div>
        <div className='col50'>
          <StatBlock monsterId={29} />
        </div>
      </Page>
      <Page title='Assault on Westwood Keep'>
        <div className='col50'>
          <StatBlock monsterId={97} />
        </div>
        <div className='col50'>
        <StatBlock monsterId={243} />
        </div>
      </Page>
    </div>
  );
}

export default App;
