import * as React from 'react'
import Layout from '../components/Layout'
import Dice from '../components/Dice'
import Chips from '../components/Chips'
import PlayerTurn from '../components/PlayerTurn'
import Rules from '../components/Rules'
import JackpotBoard from '../components/JackpotBoard.js'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Jackpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roll: '',
      space3: 0,
      space4: 0,
      space5: 0,
      space6: 0,
      space7: 0,
      space8: 0,
      space9: 0,
      space10: 0,
      space11: 0,
      player1stash: 15,
      player2stash: 15,
      player3stash: 15,
      player4stash: 15,
      playerTurn: 1,
      previousPlayersTurn: 0
    }
    this.handleRoll = this.handleRoll.bind(this);
    this.logStates = this.logStates.bind(this);
  }

  logStates() {
    console.log(this.state.roll);
  }

  handleRoll(result) {
    this.setState({
      roll: result
    });
    switch (result) {
      case 3:
        if (this.state.space3 === 3) {
          this.setState({
            space3: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space3: this.state.space3 + 1
          })
        }
        break;
      case 4:
        if (this.state.space4 === 4) {
          this.setState({
            space4: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space4: this.state.space4 + 1
          })
        }
        break;
      case 5:
        if (this.state.space5 === 3) {
          this.setState({
            space5: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space5: this.state.space5 + 1
          })
        }
        break;
      case 6:
        if (this.state.space6 === 3) {
          this.setState({
            space6: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space6: this.state.space6 + 1
          })
        }
        break;
      case 7:
        if (this.state.space7 === 3) {
          this.setState({
            space7: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space7: this.state.space7 + 1
          })
        }
        break;
      case 8:
        if (this.state.space8 === 3) {
          this.setState({
            space8: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space8: this.state.space8 + 1
          })
        }
        break;
      case 9:
        if (this.state.space9 === 3) {
          this.setState({
            space9: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space9: this.state.space9 + 1
          })
        }
        break;
      case 10:
        if (this.state.space10 === 3) {
          this.setState({
            space10: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space10: this.state.space10 + 1
          })
        }
        break;
      case 11:
        if (this.state.space11 === 3) {
          this.setState({
            space11: 0
          })
          switch (this.state.playerTurn) {
            case 1:
              this.setState({
                player1stash: this.state.player1stash + 3
              });
              break;
            case 2:
              this.setState({
                player2stash: this.state.player2stash + 3
              });
              break;
            case 3:
              this.setState({
                player3stash: this.state.player3stash + 3
              });
              break;
            case 4:
              this.setState({
                player4stash: this.state.player4stash + 3
              });
              break;
          }
        } else {
          this.setState({
            space11: this.state.space11 + 1
          })
        }
        break;
      default:
        break;
    }
    if (this.state.previousPlayersTurn === 4) {
      this.setState({
        previousPlayersTurn: 4
      })
    } else {
      this.setState({
        previousPlayersTurn: this.state.previousPlayersTurn + 1
      })
    }
    if (this.state.playerTurn === 4) {
      this.setState({
        playerTurn: 1,
      })
    } else {
      this.setState({
        playerTurn: this.state.playerTurn + 1,
      })
    }
  }

  render() {
    return (
      <Layout pageTitle="Jackpot">
        <Rules
          description="This is a dice game described by Reiner Knizia in their book, Dice Games Properly Explained When you roll a number that corresponds to a space on the board with less than three chips, one of your chips goes to that space. 'If your result corresponds to a space with three counters, you win these three counters and take them from the board.' If you roll a 2, you place a chip on each space with less than three chips. If you roll a 12, you hit the jackpot and collect all chips from the board. When the first player loses their last chip, the player with the most chips wins."
        />
        <Dice previousPlayersTurn={this.state.previousPlayersTurn} handleRoll={this.handleRoll} diceCount="2"/>
        <PlayerTurn playerTurn={this.state.playerTurn}/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Item>
                <Chips player={1} chipCount={this.state.player1stash}/>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Chips player={2} chipCount={this.state.player2stash}/>
            </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Chips player={3} chipCount={this.state.player3stash}/>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Chips player={4} chipCount={this.state.player4stash}/>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <JackpotBoard 
          space3={this.state.space3}
          space4={this.state.space4}
          space5={this.state.space5}
          space6={this.state.space6}
          space7={this.state.space7}
          space8={this.state.space8}
          space9={this.state.space9}
          space10={this.state.space10}
          space11={this.state.space11}
          roll={this.state.roll} 
        />
      </Layout>
    )
  }
}

export default Jackpot