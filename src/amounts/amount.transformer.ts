import { BaseTransformer } from "src/transformer.base"
export class AmountTransformer extends BaseTransformer {
    static singleTransform (element) {
        return {
            id: element.id,
            topUp: element.topUp
            // timestamp: element.timestamp
        }
    }
}