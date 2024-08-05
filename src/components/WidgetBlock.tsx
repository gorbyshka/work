import styled from "styled-components";
import { Widget } from "./Widget";

const WidgetWrapper = styled.div``;

const WidgetRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const WidgetBlock: React.FC = () => {

    return (

        <WidgetWrapper >

            <WidgetRow>

                <Widget
                    title="Total Value Locked"
                    value="35.87 M"
                    change="+25.4%"
                    icon={<img src={require('../assets/dollar.png')} alt="Dollar Icon" />}
                    type="value"
                    strokeColor='rgba(154, 241, 68, 1)'
                    fillColor='rgba(130, 225, 36, 0.3)'
                />

                <Widget
                    title="Active Holders"
                    value="1.23 M"
                    change="+25.4%"
                    icon={<img src={require('../assets/users.png')} alt="Users Icon" />}
                    type="value"
                    strokeColor='rgba(154, 241, 68, 1)'
                    fillColor='rgba(130, 225, 36, 0.3)'
                />

            </WidgetRow>

            <WidgetRow>

                <Widget
                    title="Network Fee"
                    value="0.005 %"
                    change=""
                    icon={<img src={require('../assets/percent.png')} alt="Percent Icon" />}
                    type="percentage"
                    strokeColor='rgba(68, 168, 241, 1)'
                    fillColor='rgba(36, 111, 225, 0.3)'
                    valueColor="rgba(68, 168, 241, 1)"
                />

                <Widget
                    title="Transaction Time"
                    value="4 MS"
                    change=""
                    icon={<img src={require('../assets/time.png')} alt="Time Icon" />}
                    type="ms"
                    strokeColor='rgba(68, 168, 241, 1)'
                    fillColor='rgba(36, 111, 225, 0.3)'
                    valueColor="rgba(68, 168, 241, 1)"
                />

            </WidgetRow>

        </WidgetWrapper >

    );

};
