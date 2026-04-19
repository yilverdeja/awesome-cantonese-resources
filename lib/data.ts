import resourcesData from '../data/resources.json';
import collectionsData from '../data/collections.json';
import { Resource, Collection } from '../types';

// Cast the imported JSON to your TypeScript types
const resources = resourcesData as Resource[];
const collections = collectionsData as Collection[];

// 1. Get all resources
export function getAllResources(): Resource[] {
  return resources;
}

// 2. Get a single resource by its ID
export function getResourceById(id: string): Resource | undefined {
  return resources.find(r => r.id === id);
}

// 3. Get all collections (Starter Kits)
export function getAllCollections(): Collection[] {
  return collections;
}

// 4. Get a specific collection AND populate it with its actual resources
export function getCollectionWithResources(collectionId: string) {
  const collection = collections.find(c => c.id === collectionId);
  if (!collection) return null;

  // Map the array of string IDs into an array of actual Resource objects
  const populatedResources = collection.resource_ids
    .map(id => getResourceById(id))
    .filter((r): r is Resource => r !== undefined); // Remove any undefined items

  return {
    ...collection,
    resources: populatedResources
  };
}