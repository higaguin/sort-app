import React from "react";
import "../sass/main.scss";
import {
  bubble_sort,
  merge_sort,
  insertion_sort,
  quick_sort,
  selection_sort,
  shuffle
} from "./algorithms";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], inProcess: false };
  }

  componentDidMount() {
    this.setState({ inProcess: true });
    this.initBars().then(items => {
      shuffle(items, async items => {
        await this.sleepFunction(items);
      }).then(() => {
        this.setState({ inProcess: false });
      });
    });
  }

  async sleepFunction(items) {
    this.setState({ items });
    await new Promise(resolve => setTimeout(resolve, 10));
  }

  initBars() {
    return new Promise(async resolve => {
      const number_elements = 150;
      let items = [];
      for (let i = 0; i < number_elements; i++) {
        let bar = {};
        bar.height = (window.innerHeight / number_elements) * i + "px";
        bar.color = (80 / 30) * i;
        bar.number = i;
        bar.div = (
          <div
            className="bar"
            style={{
              height: bar.height,
              backgroundColor: `rgb(${bar.color}, 0, 100)`
            }}
          />
        );

        items.push(bar);
        await this.sleepFunction(items);
      }
      resolve(items);
    });
  }

  render() {
    let items = this.state.items;
    let inProcess = this.state.inProcess;
    let classButton = `side-bar__item-button${inProcess ? "-disable" : ""}`;

    return (
      <div className="container">
        <nav className="side-bar">
          <div className="side-bar__header">Yet another sort app</div>
          <div className="side-bar__item">
            <a
              href="#"
              className={classButton}
              onClick={() => {
                this.setState({ inProcess: true });
                bubble_sort(items, async items => {
                  await this.sleepFunction(items);
                }).then(items => {
                  shuffle(items, async items => {
                    await this.sleepFunction(items);
                  }).then(() => {
                    this.setState({ inProcess: false });
                  });
                });
              }}
            >
              Bubble
            </a>
            <a
              href="#"
              className={classButton}
              onClick={() => {
                this.setState({ inProcess: true });
                selection_sort(items, async items => {
                  await this.sleepFunction(items);
                }).then(items => {
                  shuffle(items, async items => {
                    await this.sleepFunction(items);
                  }).then(() => {
                    this.setState({ inProcess: false });
                  });
                });
              }}
            >
              Selection
            </a>
          </div>
          <div className="side-bar__item">
            <a
              href="#"
              className={classButton}
              onClick={() => {
                this.setState({ inProcess: true });
                insertion_sort(items, async items => {
                  await this.sleepFunction(items);
                }).then(items => {
                  shuffle(items, async items => {
                    await this.sleepFunction(items);
                  }).then(() => {
                    this.setState({ inProcess: false });
                  });
                });
              }}
            >
              Insertion
            </a>
            <a
              href="#"
              className={classButton}
              onClick={() => {
                this.setState({ inProcess: true });
                merge_sort(items, async items => {
                  await this.sleepFunction(items);
                }).then(items => {
                  shuffle(items, async items => {
                    await this.sleepFunction(items);
                  }).then(() => {
                    this.setState({ inProcess: false });
                  });
                });
              }}
            >
              Merge
            </a>
          </div>
          <div className="side-bar__item">
            <a
              href="#"
              className={classButton}
              onClick={() => {
                this.setState({ inProcess: true });
                quick_sort(items, async items => {
                  await this.sleepFunction(items);
                }).then(items => {
                  shuffle(items, async items => {
                    await this.sleepFunction(items);
                  }).then(() => {
                    this.setState({ inProcess: false });
                  });
                });
              }}
            >
              Quick
            </a>
          </div>
        </nav>
        <div className="main-content">
          {items.map(item => {
            return item.div;
          })}
        </div>
      </div>
    );
  }
}

export default App;
