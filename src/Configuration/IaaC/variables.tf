variable "client_id" {
  description = "The Client ID for the Azure Service Principal"
  type        = string  
    
}

variable "client_secret" {
  description = "The Client Secret for the Azure Service Principal"
  type        = string  
  
}

variable "tenant_id" {
  description = "The Tenant ID for the Azure Service Principal"
  type        = string  
  
}

variable "subscription_id" {
  description = "The Subscription ID for the Azure account"
  type        = string  
  
}

variable "ssh_public_key" {
  description = "The SSH public key for the AKS cluster"
  type        = string
 # Default path, can be overridden
  
}