import client from '../graphql/apollo-client'
import UserOperations from '../graphql/operations/asknicely'


exports.handler = async function(event, context) {
    const body = JSON.parse(event.body);
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
            }}
        })
        
        return data;
    }
    
    try {
      createEvent(body)
      console.log(body)
    } catch(error) {
      console.log(error)
    }
  }