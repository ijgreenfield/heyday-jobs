import client from '../graphql/apollo-client'
import UserOperations from '../graphql/operations/asknicely'
import fetch from 'node-fetch';

const createEvent = async (body) => {
    const { data } = await client.mutate({
        mutation: UserOperations.Mutations.createEvent,
        variables: { input: {
        "type": "custom_asknicely_response",
        "payload": JSON.stringify({
            email: body.person.email,
            segment: body.person.segment,
            score: body.question.score,
            comment: body.question.comment
        }),
        "event_time": "2023-09-09T00:24:38.163Z"
        }}
    })
    
    return data;
}

exports.handler = async function(event, context) {
    const body = JSON.parse(event.body);
    try {
      createEvent(body)
    } catch(error) {
      console.log(error)
    }
  }