import { useMutation } from '@apollo/client'
import UserOperations from '../graphql/operations/asknicely'

const [eventCreate, {data, loading, error}] = useMutation(UserOperations.Mutations.createEvent)
  const input = {
    "input": {
      "type": "custom_solve_example",
      "payload": "{\"email\":\"example@solve.io\",\"first_name\":\"Solve\",\"last_name\":\"Data\"}",
      "event_time": "2020-09-09T00:24:38.163Z"
    }
  }
  const inputString = JSON.stringify(input)

const createEvent = () => {
    eventCreate({ variables: {
        input: {
          "type": "custom_ian_example",
          "payload": "{\"email\":\"example@solve.io\",\"first_name\":\"Solve\",\"last_name\":\"Data\"}",
          "event_time": "2020-09-09T00:24:38.163Z"
        }
      }})
}