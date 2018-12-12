import React from "react";
import Link from "next/link";
import "semantic-ui-css/semantic.min.css";
import { Modal, Header, Button, List, Icon } from "semantic-ui-react";

import { connect } from "react-redux";

import { loadData, startClock, tickClock } from "../actions";
import Page from "../components/page";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
  }
}

export default connect()(Index);

// export default () => (
//   // <ul>
//   //   <li>
//   //     <Link href="/b" as="/a">
//   //       <a>a</a>
//   //     </Link>
//   //   </li>
//   //   <li>
//   //     <Link href="/a" as="/b">
//   //       <a>b</a>
//   //     </Link>
//   //   </li>
//   //   <li>
//   //     <Link href={{ pathname: "/posts", query: { id: "2" } }} as="/posts/2">
//   //       <a>post #2</a>
//   //     </Link>
//   //   </li>
//   // </ul>
//   <div>
//     <div>{process.env.TEST}</div>
//     <Modal trigger={<Button>Show Modal</Button>}>
//       <Modal.Header>Select a Photo</Modal.Header>
//       <Modal.Content image>
//         <Modal.Description>
//           <Header>Default Profile Image</Header>
//           <p>
//             We have found the following gravatar image associated with your
//             e-mail address.
//           </p>
//           <p>Is it okay to use this photo?</p>
//         </Modal.Description>
//       </Modal.Content>
//     </Modal>
//     <List relaxed>
//       <List.Item>
//         <List.Content>
//           <List.Header as="a">Next.js</List.Header>
//         </List.Content>
//       </List.Item>
//       <List.Item>
//         <List.Content>
//           <List.Header as="a">React</List.Header>
//         </List.Content>
//       </List.Item>
//       <List.Item>
//         <List.Content>
//           <List.Header as="a">Vue.js</List.Header>
//         </List.Content>
//       </List.Item>
//     </List>
//     Hello <Icon name="world" />
//   </div>
// );
