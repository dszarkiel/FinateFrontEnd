import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class AccountsContainer extends React.Component {
    state = {
        assets: 0,
        liabilities: 0,
        investments: 0,
        netWorth: 0
    }

    // renderAccounts = () => {
    //     return this.props.accounts.map(acc => {
    //         return <AccountContainerItem key={acc.id} account={acc} />
    //     })
    // }

    calculateAssets = () => {
        let assetAccountAmt = [0];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let assets = this.props.accounts.filter(account => account.category === "Checking" || account.category === "Savings" || account.category === "Cash")
        assets.forEach(asset => assetAccountAmt.push(asset.balance))
        let totalAssets = Math.round(assetAccountAmt.reduce(reducer))
        return totalAssets
    }
    calculateLiabilities = () => {
        let liabilityAccountAmt = [0];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let liabilities = this.props.accounts.filter(account => account.category === "Loan" || account.category === "Credit Card" || account.category === "Mortgage")
        liabilities.forEach(account => liabilityAccountAmt.push(account.balance))
        let totalLiabilities = Math.round(liabilityAccountAmt.reduce(reducer))
        return totalLiabilities
    }
    calculateInvestments = () => {
        let investmentAccountAmt = [0];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let Investments = this.props.accounts.filter(account => account.category === "Investments")
        Investments.forEach(account => investmentAccountAmt.push(account.balance))
        let totalInvestments = Math.round(investmentAccountAmt.reduce(reducer))
        return totalInvestments
    }

    componentWillMount = () => {
        let assets = this.calculateAssets()
        let liabilities = this.calculateLiabilities()
        let investments = this.calculateInvestments()
        let netWorth = assets + investments - liabilities
        this.setState({
            assets: assets,
            liabilities: liabilities,
            investments: investments,
            netWorth: netWorth
        })
        // console.log(netWorth)
        // console.log(assets)
        // console.log(liabilities)
        // console.log(investments)
    }

    render(){
        return(
            <div className="accounts-container">
                <h2>Accounts</h2>
                <div className="accounts-table" >

                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h4>Assets</h4></Col>
                    <Col sm><h4 className="assets">${this.state.assets}</h4></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h4>Liabilities</h4></Col>
                    <Col sm><h4 className="liabilities">${this.state.liabilities}</h4></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h4>Investments</h4></Col>
                    <Col sm><h4 className="assets">${this.state.investments}</h4></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h4>Net Worth</h4></Col>
                    <Col sm><h4>${this.state.netWorth}</h4></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>
                
                </div>
                <Button className="account-view-btn" onClick={() => this.props.history.push('/accounts')} >View</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, null)(AccountsContainer)