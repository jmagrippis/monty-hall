import React, { PureComponent } from 'react'
import Button from 'material-ui/Button'
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form'
import Radio, { RadioGroup } from 'material-ui/Radio'

class Options extends PureComponent {
  onChange = (event, amount) => {
    const { setAmount } = this.props
    setAmount(Number(amount))
  }

  render() {
    const { amount, restart } = this.props
    return (
      <aside>
        <FormControl component="fieldset">
          <FormLabel component="legend"># of Doors</FormLabel>
          <RadioGroup
            aria-label="Total number of Doors"
            name="# of Doors"
            value={amount.toString()}
            onChange={this.onChange}
            style={{ flexDirection: 'row' }}
          >
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="10" control={<Radio />} label="10" />
            <FormControlLabel value="100" control={<Radio />} label="100" />
          </RadioGroup>
          <Button raised color="accent" onClick={restart}>
            Restart
          </Button>
        </FormControl>
      </aside>
    )
  }
}

export default Options
