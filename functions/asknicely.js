import client from '../graphql/apollo-client'
import UserOperations from '../graphql/operations/asknicely'


exports.handler = async function(event, context) {
    const body = JSON.parse(event.body);
    const isoDateString = new Date().toISOString();
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
            "event_time": isoDateString
            }}
        });

        if (data) {
            return data;
        }
        
        return null;
    }
    
    try {
      await createEvent(body)
      console.log(await createEvent(body))
    } catch(error) {
      console.log(error)
    }
  }