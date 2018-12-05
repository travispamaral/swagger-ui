import KongCurl from "../../kongComponents/curl"
import KongExecute from "../../kongComponents/execute"
import KongOperations from "../../kongComponents/Operations"
import KongOperationContainer from "../../kongComponents/OperationContainer"
import KongOperationSummary from "../../kongComponents/operation-summary"
import KongOperation from "../../kongComponents/Operation"
import KongOperationTag from "../../kongComponents/operation-tag"
import KongParameters from "../../kongComponents/Parameters"
import KongParameterRow from "../../kongComponents/Parameter-row"
import KongResponses from "../../kongComponents/responses"
import KongResponse from "../../kongComponents/response"
import KongResponseBody  from "../../kongComponents/response-body"
import KongLiveResponse from "../../kongComponents/live-response"
import KongTryItOutButton from "../../kongComponents/try-it-out-button"
import KongModelExample from "../../kongComponents/model-example"

export default function () {

  let kongComponents = {
    components: {
      KongCurl,
      KongExecute,
      KongOperations,
      KongOperationContainer,
      KongOperationSummary,
      KongOperation,
      KongOperationTag,
      KongParameters,
      KongParameterRow,
      KongResponses,
      KongResponse,
      KongResponseBody,
      KongLiveResponse,
      KongTryItOutButton,
      KongModelExample
    }
  }

  return [
    kongComponents
  ]
}
