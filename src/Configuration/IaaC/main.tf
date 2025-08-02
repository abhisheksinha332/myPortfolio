terraform {
   
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.26.0"
    }
  }
  backend "azurerm" {
    
  }
}


provider "azurerm" {
  client_id                   = var.client_id
  client_secret               =var.client_secret
  tenant_id                   = var.tenant_id
  subscription_id             = var.subscription_id
  features {}
}


resource "azurerm_resource_group" "myPortfolio" {
  name     = "myPortfolio"
  location = "East US"
}


resource "azurerm_kubernetes_cluster" "myAKS" {
  name                = "myAKS"
  location            = azurerm_resource_group.myPortfolio.location
  resource_group_name = azurerm_resource_group.myPortfolio.name
  dns_prefix          = "myaks"

  default_node_pool {
    name = "default"
    node_count = 1
    vm_size = "Standard_DS2_v2"
  }

  linux_profile {
    admin_username = "ubuntu"

    ssh_key {
        key_data = file(var.ssh_public_key)
    }
  }
  identity {
    type = "SystemAssigned"
  }

}