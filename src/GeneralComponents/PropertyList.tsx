import React from "react";
import { Box,Grid} from "@material-ui/core";

import Property, {PropertyProps} from "./Property";
import PropertyPropDefault from "./PropertyPropDefault";

export interface PropertyListProps<T> extends PropertyProps{
    info: T;
    indent: string;
}

class PropertyList<T> extends React.Component<PropertyListProps<T>, {}>{
    public static defaultProps: Partial<PropertyListProps<any>> = PropertyPropDefault;

    render() {
        const props = this.props;

        const rootStyle = {
            marginLeft: props.indent,
        }

        const info = props.info;
        const keys = Object.keys(info);

        let properties = [];
        for(const rawKey in keys){
            const key: keyof T = keys[rawKey] as keyof T;

            let keyword: string[] = [];
            const infoProp = info[key];

            if(typeof infoProp === "string"){
                keyword.push(infoProp);
            }else if(
                //check infoProp is Array<string>
                // (infoProp is array && infoProp has at least 1 elements && infoProp[0] is string)
                Array.isArray(infoProp)
                && (infoProp as Array<any>).length > 0
                && typeof infoProp[0] === "string"){
                keyword = infoProp;
            }else{
                throw new Error("props can only be string or Array<string>");
            }

            properties.push((
                <Grid item xs={12}  key={rawKey}>
                    <Property
                        propName={keys[rawKey]}
                        propKeyword={keyword}
                        fontSize={props.fontSize}
                        padding={props.padding}
                        effectHook={props.effectHook}
                        xs={props.xs}
                        sm={props.sm}
                        md={props.md}
                        lg={props.lg}
                        xl={props.xl}
                    />
                </Grid>
            ));
        }

        return (
            <Box style={rootStyle}>{properties}</Box>
        );
    }

}

export default PropertyList;