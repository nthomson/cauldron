import React, { Fragment } from 'react';
import { Scene, Item, Page, StatBlock, Table } from '../';

const Home = () => (
    <Fragment>
        <Page title='A Homebrew Adventure'>
            <div className='col50'>
                <h2>Nullam nec gravida sapien</h2>
                <p>Proin a ligula scelerisque, tempus lacus sodales, sagittis justo. Etiam a laoreet quam, dictum volutpat quam. Donec sodales eu libero in dignissim. Fusce venenatis neque sit amet commodo auctor. </p>
                <Scene>Donec in nulla non diam semper tempor. Nullam nec gravida sapien. Morbi volutpat condimentum nibh vitae luctus. Nulla vulputate turpis mauris, eu tempus dolor accumsan sed.</Scene>
                <Table />
                <Item name='Staff of Focused Pain' type='Staff, Arcane Focus'>
                    +1 Spell Attack, +1 Spell Saving Throw DC <br />
                    <strong>Action:</strong> You are able to use the crystal embedded into this staff in order to focus
                    your pain, recovering one expended spell slot. You are only able to do this once per day.
                </Item>
            </div>
            <div className='col50'>
                <StatBlock monsterId={71} />
            </div>
        </Page>
    </Fragment>
);

export default Home;