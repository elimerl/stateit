# stateit

![npm bundle size](https://img.shields.io/bundlephobia/min/stateit?style=flat-square)
![npm](https://img.shields.io/npm/v/stateit?style=flat-square)

stateit is a library for handling extra state on objects.

## Example

Let's say you have some simulation library:

```js
import { Simulation } from "somesimulationlibrary";

const sim = new Simulation();
```

And you want to store some data on the simulation:

```js
const someData = getSomeDataOnlyPertainingToYou();
```

The problem is that storing random data on the library's objects is confusing:

```js
sim.agents[0].someData = someData;
// lots of code...
sim.agents[0]. // what property was it?
```

And Typescript gets mad when you do this too:

```js
sim.agents[0].someData = someData; // Property 'someData' does not exist on type 'Agent'.
```

The solution? stateit!
Just do this:

```js
import stateit from "stateit";
const state = stateit();

state(sim.agents[0], { someData });
```

Then get the state later:

```js
state(sim.agents[0]).someData; // some data!
```

## API

stateit exports one default function `stateit` that returns a [`state`](#state) function.

### <a name="state"></a>`state(object, data?)`

If `data` is passed, adds `data` to `object` using the `...` operator.<br> Returns `object`'s state.
