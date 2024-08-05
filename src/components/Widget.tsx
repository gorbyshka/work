import React, { useState } from 'react';
import styled from 'styled-components';
import { ChartUser } from './Chart';

interface WidgetProps {
    title: string;
    value: string;
    change: string;
    icon: React.ReactElement;
    type: 'value' | 'percentage' | 'ms';
    strokeColor: string;
    fillColor: string;
    valueColor?: string;
}

const WidgetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 670px;
    height: 264px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 8px;
    background: rgba(0, 0, 4, 1);
    margin-right: 20px;
    overflow: hidden;
`;

const StyledTitle = styled.div`
    font-size: 13px;
    color: white;
`;

const Value = styled.div<{ color?: string }>`
    font-size: 44px;
    font-weight: 700;
    color: ${({ color }) => color || 'rgba(255, 184, 1, 1)'};
`;

const Change = styled.div`
    font-size: 16px;
    color: rgba(154, 241, 68, 1);
    margin-left: 10px;
`;

const ChartContainer = styled.div`
    width: 670px;
    height: 199px;
    position: relative;
    background: rgba(0, 0, 4, 1);
    display: flex;
    align-items: center;
`;

const TimeFrameButton = styled.button<{ $active?: boolean; $first?: boolean }>`
    width: 60px;
    height: 38px;
    background-color: ${({ $active }) => ($active ? 'rgba(0, 0, 4, 1)' : 'rgba(63, 67, 90, 1)')};
    color: ${({ $active }) => ($active ? 'rgba(68, 168, 241, 1)' : 'white')};
    font-weight: 700;
    padding: 5px 10px;
    border-radius: ${({ $first }) => ($first ? '16px 0 0 16px' : '0 16px 16px 0')};
    font-size: 14px;
    cursor: pointer;
    border: 1px solid rgba(63, 67, 90, 1);
`;

const TimeFrameContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const IconValueSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    gap: 5px;
`;

const IconBlock = styled.div`
    display: flex;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`;

const InfoBlockContainer = styled.div`
    width: 100%;
`;

export const Widget: React.FC<WidgetProps> = React.memo(({

    title,
    value,
    change,
    icon,
    type,
    strokeColor,
    fillColor,
    valueColor

}) => {

    const [activeButton, setActiveButton] = useState<string>('90D');

    const handleButtonClick = (buttonId: string) => setActiveButton(buttonId);

    return (

        <WidgetContainer>

            <InfoBlockContainer>

                <IconValueSection>

                    <IconBlock>

                        {icon}

                        <TextColumn>

                            <Value color={valueColor}>{type === 'value' ? value : `${value}`}</Value>

                            <StyledTitle>{title}</StyledTitle>

                        </TextColumn>

                        <Change>{change}</Change>

                    </IconBlock>

                    <TimeFrameContainer>

                        <TimeFrameButton
                            $active={activeButton === '30D'}
                            $first
                            onClick={() => handleButtonClick('30D')}
                        >

                            30 D

                        </TimeFrameButton>

                        <TimeFrameButton
                            $active={activeButton === '90D'}
                            onClick={() => handleButtonClick('90D')}
                        >

                            90 D

                        </TimeFrameButton>

                    </TimeFrameContainer>

                </IconValueSection>

            </InfoBlockContainer>

            <ChartContainer>

                <ChartUser stroke={strokeColor} fill={fillColor} />

            </ChartContainer>

        </WidgetContainer>

    );
    
});
